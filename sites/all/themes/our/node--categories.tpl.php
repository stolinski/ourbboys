<article id="article-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
        <h3<?php print $title_attributes; ?>>
          <a href="<?php print $node_url; ?>" rel="bookmark"><?php print $title; ?></a>
        </h3>
  <?php print render($title_suffix); ?>

  <div<?php print $content_attributes; ?>>
  <?php
    hide($content['comments']);
    hide($content['links']);
    print render($content);
  ?>
  </div>

  <?php if ($links = render($content['links'])): ?>
    <nav class="clearfix"><?php print $links; ?></nav>
  <?php endif; ?>

  <?php print render($content['comments']); ?>

</article>
