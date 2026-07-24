export function TerminalPanel() {
  return (
    <aside className="terminal-panel" aria-label="Developer profile terminal">
      <div className="terminal-top">
        <span />
        <span />
        <span />
        <p>profile.log</p>
      </div>
      <div className="terminal-body">
        <p>
          <span>$</span> whoami
        </p>
        <strong>software_engineer / product_builder</strong>
        <p>
          <span>$</span> education --active
        </p>
        <code>AKTU_CSE + IITM_DATA_SCIENCE</code>
        <p>
          <span>$</span> focus
        </p>
        <code>software_dev | ui_ux | leadership | impact</code>
        <p>
          <span>$</span> current_mode
        </p>
        <strong className="neon-text">building meaningful systems</strong>
      </div>
    </aside>
  );
}