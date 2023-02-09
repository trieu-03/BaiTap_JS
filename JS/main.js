

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
    
}

document.getElementById("btnGtriTB").onclick = tinhGTTB;