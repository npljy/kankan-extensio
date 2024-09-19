// 购物网站历史价格
$(function () {
  var o = location.origin + location.pathname || "";
  var l,
    w,
    t = location.href,
    bw = "fit-content",
    bh = "32px",
    left = 0,
    bottom = 0,
    fz = "18px",
    timer = null;
  if (o.indexOf("//detail.tmall.") !== -1) {
    l = "tm";
    w = "历史价格";
    left = "10px";
    t = t.replace(/\.tmall\./, ".tmallvvv.");
  } else if (o.indexOf("//item.taobao") !== -1) {
    l = "tb";
    w = "历史价格";
    left = "10px";
    t = t.replace(/\.taobao\./, ".taobaovvv.");
  } else if (o.indexOf("m.taobao.com/awp/core/detail") !== -1) {
    l = "tbm";
    w = "历史价格";
    bh = "36px";
    fz = "14px";
    t = t.replace(/\.taobao\./, ".taobaovvv.");
  } else if (o.indexOf("//item.jd") !== -1) {
    l = "jd";
    w = "历史价格";
    t = t.replace(/\.jd\.\w{1,3}/, ".jdvvv.com");
  } else if (
    o.indexOf("//mitem.jd") !== -1 ||
    o.indexOf("//item.m.jd") !== -1
  ) {
    l = "jdm";
    w = "历史价格";
    t = t.replace(/\.jd\.\w{1,3}/, ".jdvvv.com");
  } else if (o.indexOf("goods.kaola") !== -1) {
    l = "kl";
    w = "历史价格";
    left = "10px";
    t = t.replace(/(m-)?goods\.kaola\./, "goods.kaolavvv.");
  } else if (o.indexOf("//product.suning") !== -1) {
    l = "sn";
    w = "历史价格";
    left = "10px";
    bottom = "10px";
    t = t.replace(/\.suning\./, ".suningvvv.");
  } else if (o.indexOf("//m.suning.com/product") !== -1) {
    l = "snm";
    w = "历史价格";
    t = t.replace("m.suning.com/product", "product.suningvvv.com");
  } else if (o.indexOf("//product.dangdang") !== -1) {
    l = "dd";
    w = "历史价格";
    left = "0";
    bottom = "0";
    t = t.replace(/\.dangdang\./, ".dangdangvvv.");
  } else if (o.indexOf("//product.m.dangdang") !== -1) {
    l = "ddm";
    w = "历史价格";
    left = "10px";
    var protocol = location.href.split(":")[0];
    var pid = location.search.match(/\d{4,}/)[0];
    t = "".concat(protocol, "://product.dangdangvvv.com/").concat(pid, ".html");
  } else if (o.indexOf("item.gome") !== -1) {
    l = "gm";
    w = "历史价格";
    t = t.replace(/\.gome\./, ".gomevvv.");
  }
  var aEle = document.createElement("a");
  aEle.href = t;
  aEle.innerText = w;
  aEle.setAttribute("target", "_blank");
  aEle.style.cssText =
    "position:relative;z-index:11;display:inline-block;box-sizing:border-box;border-radius:4px;left:"
      .concat(left, ";bottom:")
      .concat(bottom, ";width:")
      .concat(bw, ";min-width:unset;height:")
      .concat(bh, ";line-height:")
      .concat(
        bh,
        ";box-shadow: 0 6px 20px #3cc51f;padding:0 10px;background-color:#f00;color:#000;font-size:"
      )
      .concat(fz, ";font-weight:bold;text-decoration:none;");
  function addPrice(sel) {
    var fn =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : "append";
    var priceWrap = $(sel);
    clearTimeout(timer);
    if (priceWrap.text()) {
      priceWrap[fn](aEle);
    } else {
      timer = setTimeout(function () {
        addPrice(sel);
      }, 1000);
    }
  }
  switch (l) {
    case "tm":
      addPrice("div[class^=Price--normal]");
      break;
    case "tb":
      addPrice("div[class*=Price--normal--]");
      addPrice("#J_StrPrice");
      addPrice(".tb-promo-item-bd");
      break;
    case "tbm":
      aEle.style.cssText =
        aEle.style.cssText +
        "position:fixed;z-index:111;left:unset;right:20px;bottom:60px;";
      addPrice("#app", "after");
      break;
    case "jd":
      addPrice(".summary-price .dd");
      break;
    case "jdm":
      aEle.style.cssText =
        aEle.style.cssText +
        "position:fixed;z-index:111;left:unset;right:20px;bottom:60px;";
      addPrice("#part_main", "after");
      break;
    case "kl":
      aEle.style.cssText = "".concat(aEle.style.cssText, " line-height:22px;");
      addPrice(".m-price-cnt");
      addPrice(".n-price__left");
      break;
    case "sn":
      addPrice(".price-promo li");
      break;
    case "snm":
      aEle.style.cssText =
        aEle.style.cssText +
        "position:fixed;z-index:111;left:unset;right:20px;bottom:60px;";
      addPrice("body", "after");
      break;
    case "dd":
      addPrice(".price_info", "before");
      break;
    case "ddm":
      aEle.style.cssText =
        aEle.style.cssText +
        "position:fixed;z-index:111;left:unset;right:60px;bottom:60px;";
      addPrice("body", "after");
      break;
    default:
      break;
  }
  if (o.includes("hisprice.cn")) {
    $("#golinkdivId").addClass("none").remove();
    $("#golinkId").addClass("none").remove();
    $("#recommendId").addClass("none").remove();
    $("#recommDivId").addClass("none").remove();
    $(".showGZH").addClass("none").remove();
    $(".pop1").addClass("none").remove();
    $(".coup-div").addClass("none").remove();
  }
});
