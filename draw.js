/**
 * Created by thanhhuyen on 5/7/17.
 */

function Draw_Diamond(N, H) {
    let h = Math.floor(H / 2)+1
    let width = H - 1
    for (let i = 0; i < H; i++) {
        let str = '';
        if (i <h) {
            for (let j = 0; j < N * H -N+1; j++) {
                let j2 = j % width;
                if ((j2 === h - 1 - i) || (j2 === h - 1 + i)) {
                    str += "*";
                } else {
                    str += ' ';
                }
            }
        }
        else {
            let dem=0;
            for (let j = 0; j <N * H -N+1; j++) {
                let j2 = j % width;
                let tem = i-h+1;
                if ((j2 === tem)|| (j2 === width - tem)) {
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
Draw_Diamond(6,11)