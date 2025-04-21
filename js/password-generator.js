document.addEventListener('DOMContentLoaded', function() {
    const passwordDisplay = document.getElementById('password-display');
    const copyButton = document.getElementById('copy-button');
    const generateButton = document.getElementById('generate-button');
    const lengthSlider = document.getElementById('length-slider');
    const lengthValue = document.getElementById('length-value');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');

    // 초기값 설정
    lengthValue.textContent = lengthSlider.value;

    // 길이 슬라이더 값 표시
    lengthSlider.addEventListener('input', function() {
        lengthValue.textContent = this.value;
    });

    // 비밀번호 생성 함수
    function generatePassword() {
        const length = lengthSlider.value;
        const includeUppercase = uppercaseCheckbox.checked;
        const includeLowercase = lowercaseCheckbox.checked;
        const includeNumbers = numbersCheckbox.checked;
        const includeSymbols = symbolsCheckbox.checked;

        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        // 체크된 항목이 없으면 경고
        if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
            alert('최소 하나의 옵션을 선택해주세요.');
            return;
        }

        // 체크된 항목별로 문자 집합 저장
        const characterSets = [];
        if (includeUppercase) characterSets.push(uppercase);
        if (includeLowercase) characterSets.push(lowercase);
        if (includeNumbers) characterSets.push(numbers);
        if (includeSymbols) characterSets.push(symbols);

        // 각 체크된 항목에서 최소 1개씩 선택
        let password = '';
        for (let i = 0; i < characterSets.length; i++) {
            const randomIndex = Math.floor(Math.random() * characterSets[i].length);
            password += characterSets[i][randomIndex];
        }

        // 나머지 길이만큼 랜덤하게 선택
        const remainingLength = length - characterSets.length;
        if (remainingLength > 0) {
            // 모든 체크된 항목의 문자를 합친 문자열
            const allCharacters = characterSets.join('');
            for (let i = 0; i < remainingLength; i++) {
                const randomIndex = Math.floor(Math.random() * allCharacters.length);
                password += allCharacters[randomIndex];
            }
        }

        // 비밀번호를 랜덤하게 섞기
        password = password.split('').sort(() => Math.random() - 0.5).join('');

        passwordDisplay.value = password;
    }

    // 복사 버튼 클릭 이벤트
    copyButton.addEventListener('click', function() {
        passwordDisplay.select();
        document.execCommand('copy');
        alert('비밀번호가 복사되었습니다!');
    });

    // 생성 버튼 클릭 이벤트
    generateButton.addEventListener('click', generatePassword);

    // 초기 비밀번호 생성
    generatePassword();
}); 