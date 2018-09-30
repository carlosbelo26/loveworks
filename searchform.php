<form role="search" class="search-form" method="get" action="<?php echo esc_url(home_url('/')); ?>">
	<label>
		<span class="screen-reader-text"><?php _e( 'Pesquisar:', 'asalah' ); ?></span>
		<input type="search" class="search-field" placeholder="<?php _e( 'Digite aqui sua busca ...', 'asalah' ); ?>" value="" name="s" title="<?php _e( 'Resultados para:', 'asalah' ); ?>">
	</label>
	<i class="search_submit_icon fa fa-search"><input type="submit" class="search-submit" value=""></i>
</form>