const renderSidebar = function() {
    renderTrailers($('.main-sidebar-section__carousel-wrapper'), 'inTrailerMovies');
    renderTrendingMovies($('.main-sidebar-section__tab-pane--day'), 'trendingMoviesDay');
    renderTrendingMovies($('.main-sidebar-section__tab-pane--week'), 'trendingMoviesWeek');
    renderTrendingMovies($('.main-sidebar-section__tab-pane--month'), 'trendingMoviesMonth');
    renderQuickCategory($('.main-sidebar-section__list'), quickCategory);
}