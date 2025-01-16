//init the area to be done

CKEDITOR.disableAutoInline = true;
    // CKEDITOR.inline( 'area1' );

    
CKEDITOR.inline( 'area1', {
    toolbar: [
        {
            name: 'basicstyles',
            groups: ['basicstyles'],
            items: [
                'Format',
                'Bold',
                'Italic',
                'Underline'
            ]
        },
        {
            name: 'paragraph',
            groups: [
                'list',
                'indent',
                'blocks',
                'align',
                'bidi'
            ],
            items: [
                'NumberedList',
                'BulletedList',
                'JustifyLeft',
                'JustifyCenter',
                'JustifyRight',
            ]
        },
        {
            name: 'links',
            items: [
                'Link',
                'Unlink'
            ]
        },
    ],
    fillEmptyBlocks: false,
    autoParagraph: false
} );