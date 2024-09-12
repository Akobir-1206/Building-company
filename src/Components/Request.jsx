import React, { useState } from 'react';
import request from '../assets/request.png';
import axios from 'axios';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';

export default function Request() {
  const {t, i18n} = useTranslation();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [phoneNumber, setPhoneNumber] = useState('+998 (__) ___ ____');
  const [validPhone, setValidPhone] = useState(false);

  const success = () => {
    messageApi.open({
      type: 'success',
      content: t('request.text5'),
      duration: 5,
    });
  };

  const handlePhoneFocus = () => {
    if (phoneNumber === '+998 (__) ___ ____') {
      setPhoneNumber('+998 (__) ___ ____');
    }
  };

  const handlePhoneInput = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    value = value.substring(0, 12); 

    let formattedValue = '+998 (';
    if (value.length >= 3) {
      formattedValue += value.substring(3, 5) + ') '; 
    } else {
      formattedValue += '__) ';
    }

    if (value.length >= 5) {
      formattedValue += value.substring(5, 8) + ' '; 
    } else {
      formattedValue += '___ ';
    }

    if (value.length >= 8) {
      formattedValue += value.substring(8, 12); 
    } else {
      formattedValue += '____';
    }

    setPhoneNumber(formattedValue);
    setValidPhone(value.length === 12); 
  };

  const SendMessage = (event) => {
    event.preventDefault();
    if (!validPhone) {
      messageApi.warning(t('request.text6'));
      return;
    }

    setLoading(true);

    const token = "7507582384:AAG-k08F6QU5lXxmiFFaEI5MIKzK6vnZ7h4";
    const chat_id = -4530711662;
    const url = `https://api.telegram.org/bot${token}/SendMessage`;
    const name = document.getElementById("name").value;
    const sms = document.getElementById("sms").value;
    const messageContent = `Ismi: ${name} \nNomer: ${phoneNumber} \nSms: ${sms}`;

    axios({
      url: url,
      method: "POST",
      data: {
        "chat_id": chat_id,
        "text": messageContent,
      }
    }).then((res) => {
      document.getElementById("myForm").reset();
      setPhoneNumber('+998 (__) ___ ____'); 
      success();
    }).catch((error) => {
      console.log("Yuborishda xatolik", error);
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div id='request' className='bg-gray-800 py-14 pt-36'>
      {contextHolder}
      <div className="container">
        <div className="ml-20 w-[1134px] h-[685px] bg-no-repeat justify-center rounded-2xl" style={{ backgroundImage: `url(${request})` }}>
          <h1 className='w-[290px] text-white text-3xl pt-10 ml-20 mb-14'>{t(request.text)}</h1>
          <form onSubmit={SendMessage} className='ml-20 gap-3 flex flex-col ' id='myForm'>
            <input id='name' className='w-[443px] h-[46px] block mb-2 bg-[#d9d9d9] rounded-3xl outline-none px-4' type="text" placeholder={t('request.text1')} required />
          
            <input 
              id='number' 
              className='w-[443px] h-[46px] block mb-2 bg-[#d9d9d9] rounded-3xl outline-none px-4' 
              type="text" 
              placeholder={t('request.text2')} 
              value={phoneNumber}
              onFocus={handlePhoneFocus}
              onInput={handlePhoneInput}
              required
            />

            <input id='sms' className='w-[443px] h-[146px] block mb-4 bg-[#d9d9d9] rounded-3xl outline-none px-4 pb-24' type="text" placeholder={t('request.text7')} />
            <button type='submit' disabled={loading} className='w-[231px] h-[46px] font-medium text-white rounded-3xl backdrop-blur-[8.5px] bg-white/30 border-2 border-white/30 hover:bg-transparent duration-300'>
              {loading ? t('request.text3') : t('request.text4')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
