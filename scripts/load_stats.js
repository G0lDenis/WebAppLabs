(function() {
  window.addEventListener('load', function() {
      var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
      
      document.getElementById('footer-info').textContent = 'Page Load Time: ' + loadTime + ' ms';
  });
})();
