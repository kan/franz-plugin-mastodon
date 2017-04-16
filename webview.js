module.exports = (Franz, options) => {
    Franz.latestStatement = $('.status time').attr('datetime');
    Franz.latestNotify = $($('.notification__message span').get(0)).text();

    $($('div.column div.scrollable').get(0)).on('scroll', (ev) => {
        Franz.latestStatement = $('.status time').attr('datetime');
    });
    $($('div.column div.scrollable').get(1)).on('scroll', (ev) => {
        Franz.latestNotify = $($('.notification__message span').get(0)).text();
    });

    function getMessages() {
        var reply = 0;
        const ln = $($('.notification__message span').get(0)).text();
        if (ln != Franz.latestNotify) {
            reply = 1;
        }
        var unread = 0;
        const ls = $('.status time').attr('datetime');
        if (ls != Franz.latestStatement) {
            unread = 1;
        }

        Franz.setBadge(reply, unread);
    }

    Franz.loop(getMessages);
}
