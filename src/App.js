import { useState, useEffect } from 'react'
import axiosInstance from './api/axiosConfig'


function App() {

  const [data, setData] = useState([])
  const [amount, setAmount] = useState('')
  const [balance, setBalance] = useState('')

  const fetchData = () => {
    axiosInstance.get('/doc')
    .then(response => {
      const transactionArray = response.data.BankTransactionHistory.transctionHistory
      setData(transactionArray)
      const newArr = transactionArray.map(item => item.Blance)
      setData(newArr)

      const lastItem = newArr.pop()
      setBalance(lastItem)
      // console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleDeposit = () => {
    const depositBalance = parseInt(balance) + parseInt(amount)
    setBalance(depositBalance)
    setAmount('')
  }

  const handleWithdraw = () => {
    const withdrawBalance = parseInt(balance) - parseInt(amount)
    setBalance(withdrawBalance)
    setAmount('')
  }

  return (
    <div className="max-w-md mx-auto mt-20">    
        <div>
            <p className="text-xl font-semibold">Current Balance: <span className="text-3xl font-bold">{balance}</span></p>
        </div>
       <div className="mt-5">
          <label htmlFor="deposit" className="text-sm font-semibold pb-1">Amount</label>
          <input 
          type="number" 
          name="deposit" 
          className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          onChange={handleAmount}
          value={amount}
          />
       </div>
 
        <div className="flex items-center space-x-2">
          <button 
          type="button" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 focus:outline-none"
          onClick={ handleDeposit }
          >Deposit</button>
          <button 
          type="button" 
          className="py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          onClick={ handleWithdraw }
          >Withdraw</button>
        </div>

        <div className='p-5 bg-gray-100 mt-2'>
          <h2 className='text-2xl font-semibold'>Balance history</h2>
          <ol className='mt-5 list-decimal px-5'>
            {
              data?.map((bal, index) => {
                return <li key={index} className="text-base font-medium py-1 text-gray-800">{bal}</li>
              })
            }
          </ol>
        </div>
    </div>
  );
}

export default App;
