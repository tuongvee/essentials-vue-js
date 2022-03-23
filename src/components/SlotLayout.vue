<template>
  <div class="container">
    <h2>Slot Section</h2>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
footer {
  border-top: 1px solid #ccc;
  color: #666;
  font-size: 0.8em;
}
</style>
