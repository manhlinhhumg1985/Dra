/**
 * Created by thanhhuyen on 5/7/17.
 */
const prog = require('caporal');
prog
    .version('1.0.0')
    .command('Draw')
    .argument('<n>','N param')
    .argument('<h>','H param')
    .action(function (args) {
        let N = args.n;
        let H = args.h;
        let Draw_Diamond = (N, H) => {
            if (N < 1 || H < 1 || H % 2 === 0) {
                return 0;
            }
            let h = Math.floor(H / 2) + 1
            let width = H - 1
            for (let i = 0; i < H; i++) {
                let str = '';
                if (i < h) {
                    for (let j = 0; j < N * H - N + 1; j++) {// sua dong nay
                        let j2 = j % width;
                        if ((j2 === h - 1 - i) || (j2 === h - 1 + i)) {
                            str += "*";
                        } else {
                            str += ' ';
                        }
                    }
                }
                else {
                    let dem = 0;
                    for (let j = 0; j < N * H - N + 1; j++) {//sua dong nay
                        let j2 = j % width;
                        let tem = i - h + 1;//them dong nay
                        if ((j2 === tem) || (j2 === width - tem)) {//sua dong nay
                            str += '*';
                        }
                        else {
                            str += ' ';
                        }
                    }
                }
                console.log(str);

            }

        }
        Draw_Diamond(N, H)
    });
prog.parse(process.argv);
