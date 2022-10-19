//Uploading image
$("body").on("click", "#btnUpload", function () {
    $.ajax({
        url: 'Handler.ashx',
        type: 'POST',
        data: new FormData($('form')[0]),
        cache: false,
        contentType: false,
        processData: false,
        success: function (file) {
            setTimeout(function () {
                $(".progress").hide();
                $("#lblMessage").html("<b>" + file.name + "</b> has been uploaded.");
            }, 1000);
        },
        error: function (a) {
            $("#lblMessage").html(a.responseText);
        },
        failure: function (a) {
            $("#lblMessage").html(a.responseText);
        },
        xhr: function () {
            var fileXhr = $.ajaxSettings.xhr();
            if (fileXhr.upload) {
                $(".progress").show();
                fileXhr.upload.addEventListener("progress", function (e) {
                    if (e.lengthComputable) {
                        var percentage = Math.ceil(((e.loaded / e.total) * 100));
                        $('.progress-bar').text(percentage + '%');
                        $('.progress-bar').width(percentage + '%');
                        if (percentage == 100) {
                            $('.progress-bar').text('100%');
                        }
                    }
                }, false);
            }
            return fileXhr;
        }
    });
});