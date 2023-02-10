

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
    // console.log(GTTB)

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
    var tienUSD = document.getElementById("tienUSD").value;
    var tyGia = 23500;
    
    var tienVND = tienUSD * tyGia;
    var tienVND_format = new Intl.NumberFormat().format(tienVND);

    document.getElementById("tienVND").innerHTML = tienUSD + " USD Quy Đổi Được : "+ tienVND_format + " VNĐ";

}

    document.getElementById("btnDoiTien").onclick = quyDoiTien;



//! BAITAP4
/**
 * Khối 1: input
 *  chieuDai , chieuRong
 * 
 * Khối 2:
 * 
 * B1: lấy gtrị từ form khi user click
 * + tạo hàm tính điểm
 * + gán hàm vào sự kiện click của button
 * 
 * B2: trong hàm 
 * + lấy gtrị từ form
 * + lập công thức tính  diện tích và chu vi
 * + hiển thị kết quả lên UI
 * 
 * Khối 3:output
 * ketQua
 * 
 */


function tinhChuVi_DienTich_HCN() {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

    document.getElementById("ketQua").innerHTML = "Diện Tích: "+dienTich+"; Chu Vi: " + chuVi;


}

document.getElementById("tinhKQ").onclick = tinhChuVi_DienTich_HCN;



//! BAITAP5
/**
 * Khối 1: input
 *  number
 * 
 * Khối 2:
 * 
 * B1: lấy gtrị từ form khi user click
 * + tạo hàm tính điểm
 * + gán hàm vào sự kiện click của button
 * 
 * B2: trong hàm 
 * + lấy gtrị từ form
 * tách số lấy hàng chục và hàng đơn vị 
 * + lập công thức tính tổng 2 ký số
 * + hiển thị kết quả lên UI
 * 
 * Khối 3:output
 * ketQuaKySo
 * 
 */

function tinhTongTwoKySo() {
    var number = document.getElementById("nhapSo").value;

    var hangChuc =  Math.floor(number/10);
    var hangDonVi =  number%10;

    // console.log(hangChuc,hangDonVi);

    document.getElementById("ketQuaKySo").innerHTML = "Kết quả: " + (hangChuc + hangDonVi);

}

document.getElementById("btnTinhTong").onclick = tinhTongTwoKySo;