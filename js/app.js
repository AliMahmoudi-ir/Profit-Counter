let _capital = document.getElementById('capital');
let _profit = document.getElementById('profit');
let monthlyProfit;

function ProfitCalculation(event) {
    if (_capital.value.length > 0 && _profit.value.length > 0) {
        event.preventDefault();
        ShowModal();
        SetValueOnModal();
        AddOrRemoveValidation(false);
    } else {
        AddOrRemoveValidation(true);
    }
}

_capital.addEventListener("input", (event) => {
    event.target.value = event.target.value < 0 ? 0 : event.target.value;
    ValidationFirstNumber(event);
});
_profit.addEventListener("input", (event) => {
    ValidationNumberOfDigit(event);
    ValidationFirstNumber(event);
});

function SetValueOnModal() {
    monthlyProfit = (+_capital.value * +_profit.value * 30) / 36500;
    document.getElementById("ProfitMonth").innerHTML = (~~monthlyProfit).toLocaleString();
    document.getElementById("ProfitYear").innerHTML = (~~monthlyProfit * 12).toLocaleString()
}

function AddOrRemoveValidation(params) {
    if (params) {
        _capital.classList.add("validation");
        _profit.classList.add("validation");
    } else {
        _capital.classList.remove("validation");
        _profit.classList.remove("validation");
    }
}

function ShowModal() {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
}

function ValidationNumberOfDigit(event) {
    if (event.target.value.length > 3) {
        event.target.value = event.target.value.slice(0, 3)
    }
    if (event.target.value > 100) {
        event.target.value = 100;
    }
    event.target.value = event.target.value < 0 ? 0 : event.target.value;
}

function ValidationFirstNumber(event) {
    if (event.target.value.length <= 1) {
        if (GetFirstDigit(event.target.value) == 0) {
            event.target.value = event.target.value.slice(0, 0);
        }
    }
}

function GetFirstDigit(number) {
    return Math.abs(parseInt(number[0], 10));
}