# Menu Realtime Demo

<div id="demo_wrapper">
  <textarea id="demo_textarea" spellcheck="false" placeholder="Syntax: H1 ~ H6 / Unordered list" rows="25" onKeyUp="render_demo()"></textarea>
  <div id="demo_preset">
    <ul class="menu">
      <li class="divider" data-content="UNIT TEST"></li>
      <li class="menu-item">
        <a onclick="unit_header()">Header</a>
        <a onclick="unit_list()">Unordered List</a>
        <a onclick="unit_invalid()">Invalid Syntax</a>
      </li>
    </ul>
    <ul class="menu">
      <li class="divider" data-content="BASIC"></li>
      <li class="menu-item">
        <a onclick="basic_collapsed()">Collapsed Menu</a>
        <a onclick="basic_uncollapsed()">Uncollapsed Menu</a>
      </li>
    </ul>
    <ul class="menu">
      <li class="divider" data-content="TRICKY"></li>
      <li class="menu-item">
        <a onclick="tricky_back_top()">Back to top level</a>
      </li>
    </ul>
  </div>
</div>

<style>
#demo_wrapper {
    width: 100%;
    display: flex;
}
#demo_preset {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
}
#demo_preset ul {
    margin: 0 0 1rem 0;
}
#demo_textarea {
    flex: 3;
    width: 100%;
    padding: .5em;
    font-size: .7rem;
    font-family: consolas, Menlo, monospace;
    resize: none;
}
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/10.0.0/markdown-it.min.js"></script>
<script src="/hexo-theme-book-demo/js/menu-demo.js"></script>
<script>
init()
</script>
