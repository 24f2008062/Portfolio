import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";
import { gzipSync } from "zlib";

const THREE_DEPS = ["@react-three/fiber", "@react-three/drei", "three"];
const THREE_DEP_LIMIT_KB = 200;
const TOTAL_JS_LIMIT_KB = 500;

function getBundleSizes(distDir) {
  const sizes = {};
  let totalJS = 0;

  function walk(dir) {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (extname(entry.name) === ".js") {
        const content = readFileSync(fullPath);
        const gzipped = gzipSync(content).length;
        sizes[entry.name] = gzipped;
        totalJS += gzipped;
      }
    }
  }

  if (existsSync(distDir)) {
    walk(distDir);
  }

  return { sizes, totalJS };
}

function get3DDepSizes(statsHtml) {
  const sizes = {};
  if (!existsSync(statsHtml)) return sizes;

  const html = readFileSync(statsHtml, "utf-8");
  const moduleRegex = /"name":"([^"]+)","size":(\d+),"gzipSize":(\d+)/g;
  let match;

  while ((match = moduleRegex.exec(html)) !== null) {
    const name = match[1];
    const gzipSize = parseInt(match[3], 10);

    for (const dep of THREE_DEPS) {
      if (name.includes(dep)) {
        sizes[dep] = (sizes[dep] || 0) + gzipSize;
      }
    }
  }

  return sizes;
}

function main() {
  const statsHtml = "dist/stats.html";
  const distDir = "dist";

  if (!existsSync(distDir)) {
    console.error("ERROR: dist directory not found. Run 'npm run build' first.");
    process.exit(1);
  }

  const { sizes, totalJS } = getBundleSizes(distDir);
  const threeSizes = get3DDepSizes(statsHtml);

  let threeTotal = 0;
  for (const dep of THREE_DEPS) {
    const size = threeSizes[dep] || 0;
    threeTotal += size;
    if (size > 0) {
      console.log(`  ${dep}: ${Math.round(size / 1024)} KB gzipped`);
    }
  }

  const threeKB = Math.round(threeTotal / 1024);
  const totalKB = Math.round(totalJS / 1024);

  console.log(`3D deps: ${threeKB} KB (limit: ${THREE_DEP_LIMIT_KB} KB)`);
  console.log(`Total JS: ${totalKB} KB (limit: ${TOTAL_JS_LIMIT_KB} KB)`);

  let failed = false;
  if (threeTotal > THREE_DEP_LIMIT_KB * 1024) {
    console.error(`FAIL: 3D deps exceed ${THREE_DEP_LIMIT_KB} KB limit (${threeKB} KB)`);
    failed = true;
  }

  if (totalJS > TOTAL_JS_LIMIT_KB * 1024) {
    console.error(`FAIL: Total JS exceeds ${TOTAL_JS_LIMIT_KB} KB limit (${totalKB} KB)`);
    failed = true;
  }

  if (!failed) {
    console.log("PASS: Bundle size within limits");
  }

  process.exit(failed ? 1 : 0);
}

main();