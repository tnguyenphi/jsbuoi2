/**
 * Bài Tập 1: tính tiền lương nhân viên
 * Khối 1: 
 * soNgayLam
 * tienLuongMotNgay:100000
 * 
 * Khối 2:
 * B1: Tạo biến và lấy giá trị cố ngày làm từ UI
 * B2: Tính tiền lương nhân viên
 * tienluong= soNgayLam*tienLuongMotNgay
 * 
 * KHối 3
 * tienLuong
 */

function tienLuong(){
    //Lấy giá trị từ form
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    console.log(number1,number2);
    var tienLuong = Number(number1)  * Number(number2);
    console.log(tienLuong);
    document.getElementById("txtSum").innerHTML = "Tiền lương nhân viên là (VND): "+tienLuong;

}
document.getElementById("btnSum").onclick = tienLuong;


/**
 * Bài Tập 2: tính giá trị trung bình
 * Khối 1: 
 *  nhập vào 5 số
 * so1
 * so2
 * so3
 * so4
 * so5
 * 
 * Khối 2:
 * B1: Tạo biến và lấy giá trị của 5 số đã được nhập từ UI
 * B2: Tính giá trị trung bình của 5 chữ sô
 * giaTriTrungBinh= (so1+so2+so3+so4+so5)/5
 * 
 * KHối 3
 * giaTriTrungBinh
 */




function giaTriTrungBinh(){
    var soThuNhat = document.getElementById("so1").value;
    var soThuHai = document.getElementById("so2").value;
    var soThuBa = document.getElementById("so3").value;
    var soThuTu = document.getElementById("so4").value;
    var soThuNam = document.getElementById("so5").value;
    var giaTriTrungBinh = (Number(soThuNhat)+Number(soThuHai)+Number(soThuBa)+Number(soThuTu)+Number(soThuNam))/5;
    console.log(giaTriTrungBinh);
    document.getElementById("txtTB").innerHTML = "GIá trị TB là :" + giaTriTrungBinh;
}
document.getElementById("btnTB").onclick = giaTriTrungBinh;

/**
 * Bài Tập 3: Quy đổi USD sang VND
 * Khối 1: 
 *  nhập vào  số tiền bằng USD
 * sotienUsd
 * tyGiaUsd = 23500
 * 
 * Khối 2:
 * B1: Tạo biến và lấy giá trị số tiền USD nhập từ UI
 * B2: Quy đổi từ USD sang VND
 * soTienVnd= sotienUsd*tyGiaUsd
 * 
 * KHối 3
 * soTienVnd
 */

function soTienVnd(){
    var sotienUsd = document.getElementById("tienUSD").value;
    var tyGiaUsd = 23500;
    var soTienVnd = (Number(sotienUsd))*(Number(tyGiaUsd));
    console.log(soTienVnd);
    document.getElementById("txtUsd").innerHTML = "Số tiền quy đổi từ USD sang VND là" + soTienVnd;
}
document.getElementById("btnUsd").onclick = soTienVnd;

/**
 * Bài Tập 4: TÍnh chu vi và diện tích hình chữ nhât
 * Khối 1: 
 *  độ dài 2 cạnh nhập vào
 * chieudai
 * chierong
 * 
 * Khối 2:
 * B1: Tạo biến và lấy giá trị số chiều dài chiều rộng từ UI
 * B2: Tính tchu vi diện tích
 * chuvi = (chieudai+chierong)*2
 * dientich = chieudai*chierong
 * KHối 3
 * chuvi
 * dientich
 */


function hinhChuNhat(){
    var chieudai = document.getElementById("chieudai").value;
    var chieurong = document.getElementById("chieurong").value;
    var chuvi = (Number(chieudai)+Number(chieurong))*2;
    var dientich = chieudai*chieurong;
    console.log(chuvi,dientich);
    document.getElementById("txtchuvi").innerHTML= "chu vi :" + chuvi;
    document.getElementById("txtdientich").innerHTML = "diện tích: " + dientich;
}
document.getElementById("btnHinhChuNhat").onclick = hinhChuNhat;


/**
 * Bài Tập 8: Tổng  các chữ số của số nhập vào
 *  Khối 1: nhập vào số có 2 chữ chỗ
 * soHaiChuSo
 * Khối 2:
 * B1: Tạo biến và lấy giá trị số có 2 chữ số từ UI
 * B2: Tính tổng
 * hangDonVi = soHaiChuSo%10
 * HangChuc  = soHaiChuSo/10
 * KHối 3
 *  TongCacChuSo = hangDonVi+HangChuc
 */

function TongCacChuSo(){
    var soHaiChuSo = document.getElementById("soHaiChuSo").value;
    var hangDonVi = soHaiChuSo%10;
    var HangChuc = Math.floor(soHaiChuSo/10);
    var TongCacChuSo = Number(hangDonVi) + Number(HangChuc);
    console.log(TongCacChuSo);
    document.getElementById("txtTong").innerHTML = " Tổng các chữ số :" + TongCacChuSo;
}
document.getElementById("btnTong").onclick = TongCacChuSo;