const incomeTimeText = document.querySelector('.income-time-text');

const incomeTodayBtn = document.querySelector('.income-today-btn') ;
const incomeMonthBtn = document.querySelector('.income-month-btn') ;
const incomeYearBtn = document.querySelector('.income-year-btn') ;
 

incomeTodayBtn.addEventListener('click' , () => {
    incomeTimeText.textContent = "| Today";
})

incomeMonthBtn.addEventListener('click' , () => {
    incomeTimeText.textContent = "| Month";
})

incomeYearBtn.addEventListener('click' , () => {
    incomeTimeText.textContent = "| Year";
})


const expenseTimeText = document.querySelector('.expense-time-text');

const expenseTodayBtn = document.querySelector('.expense-today-btn') ;
const expenseMonthBtn = document.querySelector('.expense-month-btn') ;
const expenseYearBtn = document.querySelector('.expense-year-btn') ;
 

expenseTodayBtn.addEventListener('click' , () => {
    expenseTimeText.textContent = "| Today";
})

expenseMonthBtn.addEventListener('click' , () => {
    expenseTimeText.textContent = "| Month";
})

expenseYearBtn.addEventListener('click' , () => {
    expenseTimeText.textContent = "| Year";
})

const remainingTimeText = document.querySelector('.remaining-time-text');

const remainingTodayBtn = document.querySelector('.remaining-today-btn') ;
const remainingMonthBtn = document.querySelector('.remaining-month-btn') ;
const remainingYearBtn = document.querySelector('.remaining-year-btn') ;
 

remainingTodayBtn.addEventListener('click' , () => {
    remainingTimeText.textContent = "| Today";
})

remainingMonthBtn.addEventListener('click' , () => {
    remainingTimeText.textContent = "| Month";
})

remainingYearBtn.addEventListener('click' , () => {
    remainingTimeText.textContent = "| Year";
})

const spendTimeText = document.querySelector('.spend-time-text');

const spendTodayBtn = document.querySelector('.spend-today-btn') ;
const spendMonthBtn = document.querySelector('.spend-month-btn') ;
const spendYearBtn = document.querySelector('.spend-year-btn') ;
 

spendTodayBtn.addEventListener('click' , () => {
    spendTimeText.textContent = "| Today";
})

spendMonthBtn.addEventListener('click' , () => {
    spendTimeText.textContent = "| Month";
})

spendYearBtn.addEventListener('click' , () => {
    spendTimeText.textContent = "| Year";
})


const activityTimeText = document.querySelector('.activity-time-text');

const activityTodayBtn = document.querySelector('.activity-today-btn') ;
const activityMonthBtn = document.querySelector('.activity-month-btn') ;
const activityYearBtn = document.querySelector('.activity-year-btn') ;
 

activityTodayBtn.addEventListener('click' , () => {
    activityTimeText.textContent = "| Today";
})

activityMonthBtn.addEventListener('click' , () => {
    activityTimeText.textContent = "| Month";
})

activityYearBtn.addEventListener('click' , () => {
    activityTimeText.textContent = "| Year";
})