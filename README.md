# Draw_diamond
## Phân tích bài toán
* Bài toán yêu cầu vẽ N hình thoi với chiều cao H.
* Để có thể vẽ được hình thỏa mãn yêu cầu ta cần tiến hành vẽ nửa trên và nửa dưới của các hình thoi.(thực ra là in các chuỗi bao gồm ký tự * và " " trên mỗi dòng của console)
* Để vẽ nửa trên thì dùng vòng lặp vẽ từ chiều cao bằng 0 đến (h = Math.floor(H/2)+1)),với chiều rộng của mỗi hình là: width = H-1;
* Vấn đề cần xử lý là tại nửa trên của các hình thoi, các kí tự * được in tại các vị trí như sau: 
    + tại dòng đầu tiên i=0 thì biến j chạy từ 0 -> (N * H - N + 1) là chiều rộng N hình thoi
    + và kí tự * sẽ được in tại các vị trí (j % width ==h - 1 - i hoặc ==h-1+i)
    + với trường hợp(N,H) = (4,5) thì phạm vi (j % width) ==(2 || 2) với i=0;với i=1 thì (j % width) ==(1||3); với i=2 thì (j % widht )==( 0 || 4 )
    + Như vậy ta thấy cặp số dư (2 || 2),(1 || 3),(0 || 4) vừa tăng vừa giảm khi i tới h và được hiện bởi đoạn code sau: 
``` javascript
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
```
* Để vẽ nửa dưới ( khi i > h) thì cặp các số dư mà (j % width ) nhận được cũng giảm dần từ (0 || 4), (1 || 3),(2 || 2)  khi h < i < H-1 được thực hiện bởi đoạn code như sau:
``` javascript
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
```
* Sau mỗi lần tăng biến i thì lại gán chuỗi bằng rỗng để tiếp tục thực hiện vòng lặp mới
## Cách chạy chương trình
* npm install caporal --save
* chạy lệnh sau từ terminal: node draw.js Draw 7 7 
## Kết quả ứng với các trường hợp tham số đầu vào khác nhau:

``` javascript   
(N,H) =(2,5)
      *   *  
     * * * * 
    *   *   *
     * * * * 
      *   *
```

``` javascript
(N,H) = (4,5)
      *   *   *   *  
     * * * * * * * * 
    *   *   *   *   *
     * * * * * * * * 
      *   *   *   * 

```

``` javascript
(N, H) = (4,7)
       *     *     *     *   
      * *   * *   * *   * *  
     *   * *   * *   * *   * 
    *     *     *     *     *
     *   * *   * *   * *   * 
      * *   * *   * *   * *  
       *     *     *     * 
```

``` javascript
(N,H) =(6,11)
     *         *         *         *         *         *     
    * *       * *       * *       * *       * *       * *    
   *   *     *   *     *   *     *   *     *   *     *   *   
  *     *   *     *   *     *   *     *   *     *   *     *  
 *       * *       * *       * *       * *       * *       * 
*         *         *         *         *         *         *
 *       * *       * *       * *       * *       * *       * 
  *     *   *     *   *     *   *     *   *     *   *     *  
   *   *     *   *     *   *     *   *     *   *     *   *   
    * *       * *       * *       * *       * *       * *    
     *         *         *         *         *         * 
```
```javascript
(N,H) =(7,7)
   *     *     *     *     *     *     *   
  * *   * *   * *   * *   * *   * *   * *  
 *   * *   * *   * *   * *   * *   * *   * 
*     *     *     *     *     *     *     *
 *   * *   * *   * *   * *   * *   * *   * 
  * *   * *   * *   * *   * *   * *   * *  
   *     *     *     *     *     *     *
```









