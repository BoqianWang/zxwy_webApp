webpackJsonp([11],{

/***/ 174:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/config/api.js + 1 modules
var api = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/dataAnalysis/transaction/bizchangetime.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var bizchangetime = ({
  data() {
    return {
      citydata: '',
      times: '',
      pageNo: 1,
      pageSize: 20,
      totalPage: 20,
      loading: false,
      sqlists: [],
      businessCode: ''
    };
  },
  mounted() {
    this.times = this.$route.query.times;
    this.shopId = this.$route.query.shopId;
    this.apirequest();
  },
  methods: {
    exportClick: function () {
      window.location.href = "http://operator.zhongxiang51.com/bizUserStatistics/downloadBusinessTakeawayDetail2Excel?startTime=" + this.times[0] + "&endTime=" + this.times[1] + "&shopId=" + this.shopId;
    },
    fenxiSearch() {
      this.apirequest();
    },
    apirequest: function () {
      this.loading = true;
      api["a" /* default */].businessTakeawayDetail2(this.pageNo, this.shopId, this.times[0], this.times[1]).then(res => {
        this.sqlists = res.data.list;
        this.loading = false;
        this.totalPage = res.data.pages * this.pageSize;
      }).catch(error => {
        this.loading = false;
      });
    },
    onselected(data) {
      console.log(data);
      this.citydata = data;
    },
    handleCurrentChange: function (currentPage) {
      this.pageNo = currentPage;
      this.loading = true;
      this.apirequest();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3544e71f","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/dataAnalysis/transaction/bizchangetime.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',[_vm._v("数据分析")]),_vm._v(" "),_c('el-breadcrumb-item',{nativeOn:{"click":function($event){_vm.$router.back(-2)}}},[_vm._v("交易数据分析")]),_vm._v(" "),_c('el-breadcrumb-item',{nativeOn:{"click":function($event){_vm.$router.back(-1)}}},[_vm._v(_vm._s(this.$route.query.sqName)+"商圈")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v(_vm._s(this.$route.query.bizName))])],1),_vm._v(" "),_c('div',{staticClass:"search_div"},[_c('el-date-picker',{staticStyle:{"margin-left":"10px"},attrs:{"type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:(_vm.times),callback:function ($$v) {_vm.times=$$v},expression:"times"}}),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"20px"},attrs:{"type":"primary"},on:{"click":function($event){_vm.fenxiSearch()}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"20px"},on:{"click":function($event){_vm.exportClick()}}},[_vm._v("导出")])],1),_vm._v(" "),_c('div',{staticClass:"sqfenxi_body"},[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"multipleTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.sqlists,"tooltip-effect":"dark","max-height":"600","header-row-class-name":"headerClass","border":""}},[_c('el-table-column',{attrs:{"prop":"orderTime","label":"时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n          "+_vm._s(new Date(parseInt(scope.row.orderTime)).toLocaleDateString())+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"orderNum","label":"订单数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"originalCost","label":"订单金额"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"actualCost","label":"实际支付金额"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"deductedCost","label":"积分抵扣"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"retPlat","label":"营业收入"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"platSubsidy","label":"平台补贴"}})],1),_vm._v(" "),_c('div',{staticClass:"block"},[_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"total":_vm.totalPage},on:{"current-change":_vm.handleCurrentChange}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var transaction_bizchangetime = (esExports);
// CONCATENATED MODULE: ./src/page/dataAnalysis/transaction/bizchangetime.vue
function injectStyle (ssrContext) {
  __webpack_require__(174)
}
var normalizeComponent = __webpack_require__(43)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  bizchangetime,
  transaction_bizchangetime,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var dataAnalysis_transaction_bizchangetime = __webpack_exports__["default"] = (Component.exports);


/***/ })

});