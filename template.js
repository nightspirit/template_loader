var template = (function () {
  var cache = {};

  function get(id) {
    if ( ! cache[id]) {
      var dfd = new $.Deferred();
      cache[id] = dfd;
      var $tmpl = $('#' + id);
      var html = $tmpl.html();
      var src = $tmpl.attr('src');
      if ( !! html) {
        dfd.resolve(html);
      } else if ( !! src) {
        $.get(src,function(res){
          dfd.resolve(res);
        });
      }
    }
    return cache[id];
  }

  return function(id){
    if($.isArray(id)){
      var dfd = new $.Deferred();
      $.when.apply($,$.map(id,get)).then(function(){
        dfd.resolve([].map.call(arguments,function(i){return i;}));
      });
      return dfd;
    }else{
      return get(id);
    }
  }

})();
