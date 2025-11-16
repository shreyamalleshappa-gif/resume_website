// script.js - small behavior helpers
$(function () {
  // set current year
  $('#year, #year2').text(new Date().getFullYear());

  // set today's date in bio-data (format: 13 Nov 2025)
  const d = new Date();
  const opts = { year: 'numeric', month: 'short', day: 'numeric' };
  $('#today').text(d.toLocaleDateString('en-GB', opts));

  // print / download button
  $('#printResume').on('click', function () {
    // trigger browser print (user can "Save as PDF")
    window.print();
  });

  // add simple nav active highlight (based on filename)
  const path = window.location.pathname.split('/').pop();
  $('.site-nav a').each(function () {
    const href = $(this).attr('href');
    if (href === path || (href === 'index.html' && path === '')) {
      $(this).addClass('active');
    }
  });

  // optional: smooth scrolling for anchors (if used)
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const targ = $(this.hash);
    if (targ.length) {
      $('html,body').animate({ scrollTop: targ.offset().top - 10 }, 500);
    }
  });
});