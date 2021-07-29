<template>
  <div class="demo-clock">
    <!-- 组件渲染展示 -->
    <div class="source">
      <slot name="source" />
    </div>
    <div class="meta">
      <!-- 描述展示 -->
      <div class="meta-description">
        <slot />
      </div>
      <!-- 组件源代码展示 -->
      <div class="meta-highlight">
        <slot name="highlight" />
      </div>
    </div>
  </div>
</template>

<script lang="tsx">
  import { Component, Vue } from 'vue-property-decorator'
  @Component({
    name: 'demo-block'
  })
  export default class DemoBlock extends Vue {}
</script>

<style lang="scss">
  .demo-clock {
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;

    &.hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    }

    .source {
      padding: 24px;
      min-height: 200px;
    }

    .meta {
      background-color: #fafafa;
      border-top: solid 1px #eaeefb;
      &-description {
        padding: 0px 20px;
        box-sizing: border-box;
        border: solid 1px #ebebeb;
        border-radius: 3px;
        font-size: 14px;
        line-height: 22px;
        color: #666;
        word-break: break-word;
        margin: 10px;
        background-color: #fff;

        code {
          color: #5e6d82;
          background-color: #e6effb;
          margin: 0 4px;
          display: inline-block;
          padding: 1px 5px;
          font-size: 12px;
          border-radius: 3px;
          height: 18px;
          line-height: 18px;
        }
      }

      &-highlight {

        pre {
          margin-bottom: 0px;
          code.hljs {
            background: none;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>