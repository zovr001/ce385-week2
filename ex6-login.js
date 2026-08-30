function login(inputUser, inputPass, role, isActive, age) {
    // 1. ตรวจ username และ password ก่อน
    if (inputUser !== "admin" || inputPass !== "ce385pass") {
        return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง (401)";
    }

    // 2. ตรวจว่าบัญชีถูกระงับหรือไม่
    if (isActive === false) {
        return "บัญชีถูกระงับการใช้งาน (403)";
    }

    // 3. ตรวจอายุ
    if (age < 18) {
        return "อายุไม่ถึงเกณฑ์";
    }

    // 4. ตรวจสิทธิ์ตาม role
    if (role === "อาจารย์") {
        return "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล) (200)";
    } else if (role === "นักศึกษา") {
        return "เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป) (200)";
    }

    // กรณี role ไม่ตรงกับที่กำหนด
    return "สิทธิ์ผู้ใช้ไม่ถูกต้อง";
}

console.log("1.", login("admin", "ce385pass", "อาจารย์", true, 30));
// สำเร็จ (อาจารย์)

console.log("2.", login("admin", "ce385pass", "นักศึกษา", true, 20));
// สำเร็จ (นักศึกษา)

console.log("3.", login("admin", "wrongpass", "อาจารย์", true, 30));
// รหัสผ่านผิด

console.log("4.", login("admin", "ce385pass", "อาจารย์", false, 30));
// บัญชีถูกระงับ

console.log("5.", login("admin", "ce385pass", "นักศึกษา", true, 17));
// อายุไม่ถึงเกณฑ์

console.log("6.", login("admin", "ce385pass", "ผู้ใช้ทั่วไป", true, 25));
