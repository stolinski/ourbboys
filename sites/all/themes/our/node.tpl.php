<article id="article-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php print $unpublished; ?>

  <?php print render($title_prefix); ?>
  <?php if ($title && !$page): ?>
    <header>
      <?php if ($title): ?>
        <h1<?php print $title_attributes; ?>>
          <?php print $title; ?>
        </h1>
      <?php endif; ?>
    </header>
  <?php endif; ?>
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
