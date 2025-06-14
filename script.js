// script.js

// ฟังก์ชันสำหรับทอยลูกเต๋า
function rollDice() {
    // สร้างตัวเลขสุ่มระหว่าง 1 ถึง 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // อ้างอิงถึงองค์ประกอบ HTML
    const diceDisplay = document.getElementById('dice-display');
    const resultText = document.getElementById('result-text');

    // กำหนดสัญลักษณ์ Unicode สำหรับแต่ละหน้าของลูกเต๋า
    let diceSymbol;
    switch (randomNumber) {
        case 1: diceSymbol = '⚀'; break; // ลูกเต๋าหน้า 1
        case 2: diceSymbol = '⚁'; break; // ลูกเต๋าหน้า 2
        case 3: diceSymbol = '⚂'; break; // ลูกเต๋าหน้า 3
        case 4: diceSymbol = '⚃'; break; // ลูกเต๋าหน้า 4
        case 5: diceSymbol = '⚄'; break; // ลูกเต๋าหน้า 5
        case 6: diceSymbol = '⚅'; break; // ลูกเต๋าหน้า 6
        default: diceSymbol = randomNumber; // กรณีฉุกเฉิน (ไม่น่าเกิดขึ้น) แสดงเป็นตัวเลข
    }

    // อัปเดตการแสดงผลลูกเต๋าและข้อความผลลัพธ์
    diceDisplay.textContent = diceSymbol;
    resultText.textContent = `คุณทอยได้: ${randomNumber}`;

    // ทำให้ animation ทำงานซ้ำทุกครั้งที่กดทอยลูกเต๋า
    // โดยการรีเซ็ต animation แล้วบังคับให้ browser 'reflow' เพื่อให้ animation เริ่มใหม่
    diceDisplay.style.animation = 'none'; // ล้าง animation เก่า
    void diceDisplay.offsetWidth; // บังคับ reflow
    diceDisplay.style.animation = 'bounce 0.5s ease-in-out'; // กำหนด animation ใหม่
}

// เมื่อเอกสาร HTML โหลดเสร็จสมบูรณ์
// เราจะเพิ่ม Event Listener ให้กับปุ่ม "ทอยลูกเต๋า"
document.addEventListener('DOMContentLoaded', () => {
    const rollButton = document.querySelector('button'); // เลือกปุ่มแรกในเอกสาร
    if (rollButton) {
        rollButton.addEventListener('click', rollDice); // เมื่อคลิกปุ่ม ให้เรียกฟังก์ชัน rollDice
    }
});