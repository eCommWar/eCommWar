//= require "jquery"
//= require "jquery.flot"
//= require "jquery.flot.time"
//= require "jquery.timeago"
//= require "jquery.isotope"
//= require "jquery.pin"
//= require "jquery.matchHeight"
//= require "share"
//= require_self

$(function() {
  var share = new Share("#share-button-top", {
    networks: {
      facebook: {
        app_id: "266088087153385",
      }
    }
  });

  // This is still buggy and just a band-aid
  $(window).on('resize', function(){
    $('.navbar').attr('style', '').removeData('pin');
    $('.navbar').pin();
  });

  $(document).ready(function() {
    $("time.timeago").timeago();
    $("time.timeago").show();

    var langMatches = location.href.match(/[\?&]lang=([^&#].*)/);
    if (langMatches && langMatches[1]) {
      var lang = ".lang-" + langMatches[1].toLowerCase();
      $("select[name='filter']").val(lang);
      $(".projects").isotope({filter: lang.replace(/(\#)/g, '\\$1')});
    }
  });

  var sortAscending = {title: true};

  $(".projects").isotope({
    layoutMode: "fitRows",
    getSortData: {
      stars: "[data-stars] parseInt",
      forks: "[data-forks] parseInt",
      issues: "[data-issues] parseInt",
      language: "[data-language]",
      title: "[data-title]"
    }
  });

  $('.landing .card').matchHeight();

  $("select[name='filter']").change(function(e) {
    console.log("Filter by: %o", $(this).val());
    $(".projects").isotope({filter: $(this).val().replace(/(\#)/g, '\\$1')});
  });

  $("select[name='sort']").change(function(e) {
    var val = $(this).val();
    $(".projects").isotope({sortBy: val, sortAscending: sortAscending[val] || false});
  });
});
