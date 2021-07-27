<template>
  <div class="ad-components">
    fjkdsljfklds
  </div>
</template>

<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'ad-components'
})
export default class AdComponents extends Vue {
}
</script>

<style lang="scss">
.ad-components {
  width: 1300px;
  margin-left: 50%;
  transform: translate(-50%,0);
  background-color: #fff;
  .slider {
    float: left;
    width: 300px;
    max-height: 100vh;
    overflow-y: auto;
    padding-top: 30px;
  }

  .content {
    float: left;
    margin-left: 100px;
    width: 800px;
    max-height: 100vh;
    overflow-y: auto;
    padding-bottom: 100px;
  }

  a {
    text-decoration: none;
  }

  @mixin menu-level {
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 5px;

    &:hover {
      color: #1989fa;
      background-color: #F0F0F0;
      cursor: pointer;
    }
  }

  .menu-level1 {
    @include menu-level;
    font-size: 14px;
    font-weight: 500;
    color: #333333;
    padding-left: 12px
  }
  .menu-level2 {
    @include menu-level;
    color: #999999;
    font-size: 12px;
    font-weight: 600;
    padding-left: 24px
  }
  .menu-level3 {
    @include menu-level;
    color: #333333;
    font-size: 14px;
    padding-left: 24px
  }

  table {
    width: 100%;
    text-align: left;

    tr {
      line-height: 40px;
    }

    th {
      color: #909399;
      font-weight: 400;
      padding-left: 10px;
      border-bottom: 1px solid #dcdfe6;
    }

    td {
      color: #606266;
      border-bottom: 1px solid #dcdfe6;
      padding-left: 10px;
      font-size: 14px;
    }
  }
}
</style>