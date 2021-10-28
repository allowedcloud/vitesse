<script setup lang="ts">
</script>

<template>
  <footer>
    <nav aria-labelledby="footer-navigation">
      &lt;TheFooter /&gt;
    </nav>
  </footer>
</template>

<style lang="postcss" scoepd>
footer {
  position: absolute;
  bottom: 0;
  right: 1rem;
  width: 100%;
  height: 2.5rem;
  padding: 1em 0;
  text-align: center;
  font-variant: small-caps;
  font-weight: 600;
  font-size: 14px;
  /* border-top: 1px solid var(--green-8);
  border-bottom: 1px solid var(--green-8); */
  border-right: 1px solid var(--green-8);
  color: var(--green-7);
}

html.dark footer {
  /* border-top: 1px solid var(--green-10);
  border-bottom: 1px solid var(--green-10); */
  border-right: 1px solid var(--green-10);
  color: var(--green-9);
}
</style>
