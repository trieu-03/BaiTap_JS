

        //! BAITAP1 
/**
 * Khối 1: input
 *  tienLuong , soNgay
 * 
 * Khối 2:
 * 
 * B1: lấy gtrị từ form khi user click
 * + tạo hàm tính điểm
 * + gán hàm vào sự kiện click của button
 * 
 * B2: trong hàm 
 * + lấy gtrị từ form
 * + lập công thức tính tiền lương
 * + hiển thị kết quả lên UI
 * 
 * Khối 3:output
 * luong
 * 
 */

function tinhTienLuong(){

    var tienLong = document.getElementById("tienLuong").value;
    var soNgay = document.getElementById("ngayLam").value ;
    // console.log(tienLong,soNgay);

    var luong = (tienLong * soNgay );
    // console.log(luong);

    document.getElementById("ketQuaTinh").innerHTML = "Số tiền lương là : <span>$</span>" + luong.toLocaleString();
}

document.getElementById("btnTinhLuong").onclick = tinhTienLuong;








 //! BAITAP2 
/**
 * Khối 1: input
 *  thuNhat , thuHai ,thuBa ,thuBon,thuNam
 * 
 * Khối 2:
 * 
 * B1: lấy gtrị từ form khi user click
 * + tạo hàm tính điểm
 * + gán hàm vào sự kiện click của button
 * 
 * B2: trong hàm 
 * + lấy gtrị từ form
 * + lập công thức tính gtrị TB
 * + hiển thị kết quả lên UI
 * 
 * Khối 3:output
 * GTTB
 * 
 */

function tinhGTTB() {
    var soThuNhat = document.getElementById("thuNhat").value;
    var soThuHai = document.getElementById("thuHai").value;
    var soThuBa = document.getElementById("thuBa").value;
    var soThuBon = document.getElementById("thuBon").value;
    var soThuNam = document.getElementById("thuNam").value;

    var GTTB = (Number(soThuNhat)+Number(soThuHai)+Number(soThuBa)+Number(soThuBon)+Number(soThuNam)) / 5;
    console.log(GTTB)

    document.getElementById("ketGtriTB").innerHTML ="Điểm Trung Bình là :"+ GTTB;

}

document.getElementById("btnGtriTB").onclick = tinhGTTB;



 //! BAITAP3
/**
 * Khối 1: input
 *  tienUSD
 * 
 * Khối 2:
 * 
 * B1: lấy gtrị từ form khi user click
 * + tạo hàm tính điểm
 * + gán hàm vào sự kiện click của button
 * 
 * B2: trong hàm 
 * + lấy gtrị từ form
 * + lập Giá USD quy đổi ra VNĐ
 * + hiển thị kết quả lên UI
 * 
 * Khối 3:output
 *  VND
 * 
 */


function quyDoiTien() {
    var doiTien = document.getElementById("tienUSD")

}





//! BAITAP
/**
 * Khối 1: input
 *  thuNhat , thuHai ,thuBa ,thuBon,thuNam
 * 
 * Khối 2:
 * 
 * B1: lấy gtrị từ form khi user click
 * + tạo hàm tính điểm
 * + gán hàm vào sự kiện click của button
 * 
 * B2: trong hàm 
 * + lấy gtrị từ form
 * + lập công thức tính gtrị TB
 * + hiển thị kết quả lên UI
 * 
 * Khối 3:output
 * GTTB
 * 
 */
