<div class="table">
    <?php foreach ($_SESSION['history'] as $value) { ?>
        <div class="table-content">
            <div class="table-row">
                <div class="table-data"><?php echo $value[0] ?></div>
            </div>
        </div>
    <?php }?>
</div>
