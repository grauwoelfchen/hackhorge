<script>
  import "../layout.css";
</script>

<div id="page">
  <nav>
    <a href="/">Top</a>
    <a href="/tty">About</a>
    <a href="/dev">Dev</a>
    <a href="/opt/game">Gamedev</a>
  </nav>
  <main>
    <slot></slot>
  </main>
  <footer>
    <p class="copyright">&copy; 2011-2022 Yasuhiro Яша Asaka (Yasha)</p>
    <ul>
      <li class="code-of-ethics"><a href="/code-of-ethics.html">Code of Ethics</a></li>
      <li class="server-status">Server Status</li>
    </ul>
  </footer>
</div>
