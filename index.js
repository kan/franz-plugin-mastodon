module.exports = (Franz) => {
    class Massr extends Franz {
        validateServer(URL) {
            const api = `${URL}`;
            return new Promise((resolve, reject) => {
                $.get(api, (resp) => {
                    resolve();
                }).fail(reject);
            });
        }
    }

    return Massr;
};
