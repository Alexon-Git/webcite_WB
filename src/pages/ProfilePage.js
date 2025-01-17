import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.12 11.78C11.05 11.77 10.96 11.77 10.88 11.78C9.12 11.72 7.71997 10.28 7.71997 8.50998C7.71997 6.69998 9.18 5.22998 11 5.22998C12.81 5.22998 14.28 6.69998 14.28 8.50998C14.27 10.28 12.88 11.72 11.12 11.78Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.74 18.3801C15.96 20.0101 13.6 21.0001 11 21.0001C8.40001 21.0001 6.04001 20.0101 4.26001 18.3801C4.36001 17.4401 4.96001 16.5201 6.03001 15.8001C8.77001 13.9801 13.25 13.9801 15.97 15.8001C17.04 16.5201 17.64 17.4401 17.74 18.3801Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="profile-name">Александр</div>
        </div>
        <div className="profile-buttons">
          <button className="instruction-button" onClick={() => navigate('/instructions')}>
            <svg
              width="23"
              height="21"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 8.46667V19.6667M11.5 8.46667C11.5 5.85309 11.5 4.54631 10.9913 3.54805C10.5439 2.66996 9.83003 1.95605 8.95195 1.50863C7.95369 1 6.64691 1 4.03333 1H2.86667C2.21327 1 1.88657 1 1.63701 1.12716C1.41749 1.23902 1.23901 1.41749 1.12715 1.63701C1 1.88657 1 2.21327 1 2.86667V15.4667C1 16.1201 1 16.4468 1.12715 16.6963C1.23901 16.9159 1.41749 17.0943 1.63701 17.2062C1.88657 17.3333 2.21327 17.3333 2.86667 17.3333H6.30446C6.93468 17.3333 7.24979 17.3333 7.5545 17.3877C7.82494 17.4359 8.08878 17.5157 8.34056 17.6257C8.62421 17.7495 8.8864 17.9243 9.41073 18.2739L11.5 19.6667M11.5 8.46667C11.5 5.85309 11.5 4.54631 12.0087 3.54805C12.4561 2.66996 13.17 1.95605 14.048 1.50863C15.0463 1 16.3531 1 18.9667 1H20.1333C20.7868 1 21.1134 1 21.363 1.12716C21.5826 1.23902 21.761 1.41749 21.8728 1.63701C22 1.88657 22 2.21327 22 2.86667V15.4667C22 16.1201 22 16.4468 21.8728 16.6963C21.761 16.9159 21.5826 17.0943 21.363 17.2062C21.1134 17.3333 20.7868 17.3333 20.1333 17.3333H16.6955C16.0653 17.3333 15.7502 17.3333 15.4455 17.3877C15.175 17.4359 14.9112 17.5157 14.6594 17.6257C14.3758 17.7495 14.1136 17.9243 13.5893 18.2739L11.5 19.6667"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Инструкция
          </button>
          <button className="service-button" onClick={() => navigate('/instructions')}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 10.5C21 12.5767 20.3842 14.6068 19.2304 16.3335C18.0767 18.0602 16.4368 19.406 14.5182 20.2007C12.5996 20.9954 10.4884 21.2034 8.45155 20.7982C6.41475 20.3931 4.54383 19.3931 3.07538 17.9246C1.60693 16.4562 0.606904 14.5852 0.201759 12.5484C-0.203385 10.5116 0.00454948 8.40045 0.799269 6.48182C1.59399 4.5632 2.9398 2.92332 4.66652 1.76957C6.39323 0.615814 8.4233 0 10.5 0C11.8789 0 13.2443 0.27159 14.5182 0.799265C15.7921 1.32694 16.9496 2.10036 17.9246 3.07538C18.8996 4.05039 19.6731 5.2079 20.2007 6.48182C20.7284 7.75574 21 9.12112 21 10.5ZM6.98541 2.17904C4.91353 3.05007 3.23923 4.65992 2.2876 6.69604C1.33596 8.73217 1.1749 11.0493 1.83567 13.1975C2.49644 15.3457 3.9319 17.1717 5.86335 18.321C7.7948 19.4703 10.0844 19.8609 12.2877 19.4169C14.4909 18.9729 16.4506 17.7261 17.7862 15.9184C19.1217 14.1108 19.738 11.8713 19.5152 9.63488C19.2924 7.39841 18.2465 5.32453 16.5806 3.81587C14.9146 2.30722 12.7475 1.47144 10.5 1.47082C9.29284 1.46884 8.0976 1.70969 6.98541 2.17904ZM10.5053 3.95093C10.8035 3.9504 11.0951 4.03835 11.3432 4.20364C11.5913 4.36893 11.7849 4.60413 11.8993 4.87946C12.0137 5.15479 12.0438 5.45788 11.9859 5.75035C11.9279 6.04282 11.7845 6.31152 11.5738 6.52244C11.363 6.73335 11.0945 6.87701 10.8021 6.9352C10.5096 6.9934 10.2065 6.96353 9.93109 6.84938C9.65566 6.73522 9.42029 6.5419 9.25478 6.29391C9.08927 6.04591 9.00107 5.75438 9.00133 5.45623C9.00133 5.05688 9.15988 4.67386 9.44214 4.39135C9.7244 4.10884 10.1073 3.94995 10.5066 3.9496L10.5053 3.95093ZM11.5557 16.183V9.28249C11.5607 9.1415 11.5373 9.00094 11.4868 8.86921C11.4363 8.73747 11.3598 8.61726 11.2618 8.51574C11.1638 8.41423 11.0464 8.33349 10.9165 8.27834C10.7867 8.2232 10.6471 8.19478 10.506 8.19478C10.3649 8.19478 10.2253 8.2232 10.0954 8.27834C9.96554 8.33349 9.84812 8.41423 9.75015 8.51574C9.65218 8.61726 9.57566 8.73747 9.52516 8.86921C9.47467 9.00094 9.45122 9.1415 9.45624 9.28249V16.183C9.4659 16.455 9.58073 16.7126 9.77654 16.9015C9.97235 17.0905 10.2338 17.1961 10.506 17.1961C10.7781 17.1961 11.0396 17.0905 11.2354 16.9015C11.4312 16.7126 11.546 16.455 11.5557 16.183Z"
                fill="black"
              />
            </svg>
            О сервисе
          </button>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-item" onClick={() => navigate('/purchases')}>
          <div className="item-text">
            <span className="item-title">Мои покупки</span>
            <span className="item-subtitle">Список всех ваших покупок</span>
          </div>
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.247666 11.4965C0.573851 11.8369 1.10275 11.8369 1.42893 11.4965L5.51127 7.23166C6.16312 6.55075 6.16287 5.44731 5.51077 4.76665L1.42592 0.503553C1.09974 0.163122 0.570844 0.163122 0.244651 0.503553C-0.0815504 0.843992 -0.0815504 1.39594 0.244651 1.73638L3.74081 5.38515C4.06707 5.72556 4.06707 6.27755 3.74081 6.61796L0.247666 10.2636C-0.0785353 10.6041 -0.0785353 11.156 0.247666 11.4965Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="profile-item" onClick={() => navigate('/add-product')}>
          <div className="item-text">
            <span className="item-title">Разместить товар</span>
            <span className="item-subtitle">Для продавцов</span>
          </div>
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.247666 11.4965C0.573851 11.8369 1.10275 11.8369 1.42893 11.4965L5.51127 7.23166C6.16312 6.55075 6.16287 5.44731 5.51077 4.76665L1.42592 0.503553C1.09974 0.163122 0.570844 0.163122 0.244651 0.503553C-0.0815504 0.843992 -0.0815504 1.39594 0.244651 1.73638L3.74081 5.38515C4.06707 5.72556 4.06707 6.27755 3.74081 6.61796L0.247666 10.2636C-0.0785353 10.6041 -0.0785353 11.156 0.247666 11.4965Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="profile-item" onClick={() => navigate('/catalog')}>
          <div className="item-text">
            <span className="item-title">Каталог</span>
            <span className="item-subtitle">Все актуальные товары</span>
          </div>
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.247666 11.4965C0.573851 11.8369 1.10275 11.8369 1.42893 11.4965L5.51127 7.23166C6.16312 6.55075 6.16287 5.44731 5.51077 4.76665L1.42592 0.503553C1.09974 0.163122 0.570844 0.163122 0.244651 0.503553C-0.0815504 0.843992 -0.0815504 1.39594 0.244651 1.73638L3.74081 5.38515C4.06707 5.72556 4.06707 6.27755 3.74081 6.61796L0.247666 10.2636C-0.0785353 10.6041 -0.0785353 11.156 0.247666 11.4965Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="profile-item" onClick={() => navigate('/instructions')}>
          <div className="item-text">
            <span className="item-title">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5501 4.93834C10.3693 3.08334 9.27261 0.166672 5.88344 0.166672C2.49428 0.166672 1.39761 3.08334 1.21678 4.93834C0.582408 5.1791 0.163969 5.78816 0.166762 6.46667V7.28334C0.166762 8.1854 0.898044 8.91667 1.80011 8.91667C2.70217 8.91667 3.43344 8.1854 3.43344 7.28334V6.46667C3.43051 5.8028 3.02744 5.20626 2.41261 4.95584C2.52928 3.88251 3.10094 1.33334 5.88344 1.33334C8.66594 1.33334 9.23178 3.88251 9.34844 4.95584C8.73486 5.2068 8.33382 5.80375 8.33344 6.46667V7.28334C8.33598 7.91041 8.69605 8.48109 9.26094 8.75334C9.01594 9.21417 8.39178 9.83834 6.85761 10.025C6.55094 9.55933 5.95761 9.37575 5.44154 9.58686C4.92546 9.79797 4.6309 10.3447 4.73852 10.8919C4.84614 11.439 5.32585 11.8333 5.88344 11.8333C6.32406 11.8309 6.72571 11.5804 6.92178 11.1858C9.42428 10.9 10.2234 9.61084 10.4743 8.8525C11.1529 8.63269 11.6093 7.9966 11.6001 7.28334V6.46667C11.6029 5.78816 11.1845 5.1791 10.5501 4.93834ZM2.26678 7.28334C2.26678 7.54107 2.05784 7.75001 1.80011 7.75001C1.54238 7.75001 1.33344 7.54107 1.33344 7.28334V6.46667C1.33344 6.29995 1.42239 6.14589 1.56678 6.06253C1.71116 5.97916 1.88906 5.97916 2.03344 6.06253C2.17783 6.14589 2.26678 6.29995 2.26678 6.46667V7.28334ZM9.50011 6.46667C9.50011 6.20894 9.70904 6.00001 9.96678 6.00001C10.2245 6.00001 10.4334 6.20894 10.4334 6.46667V7.28334C10.4334 7.54107 10.2245 7.75001 9.96678 7.75001C9.70904 7.75001 9.50011 7.54107 9.50011 7.28334V6.46667Z"
                  fill="black"
                />
              </svg>
              Поддержка
            </span>
            <span className="item-subtitle">
              Оперативно ответим на все Ваши вопросы
            </span>
          </div>
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.247666 11.4965C0.573851 11.8369 1.10275 11.8369 1.42893 11.4965L5.51127 7.23166C6.16312 6.55075 6.16287 5.44731 5.51077 4.76665L1.42592 0.503553C1.09974 0.163122 0.570844 0.163122 0.244651 0.503553C-0.0815504 0.843992 -0.0815504 1.39594 0.244651 1.73638L3.74081 5.38515C4.06707 5.72556 4.06707 6.27755 3.74081 6.61796L0.247666 10.2636C-0.0785353 10.6041 -0.0785353 11.156 0.247666 11.4965Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="profile-item" onClick={() => navigate('/catalog-moderate')}>
          <div className="item-text">
            <span className="item-title">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3208 0.579092C10.6374 -0.104323 9.52942 -0.104329 8.84599 0.579092L7.86611 1.55898L3.25427 6.17078C3.17951 6.24556 3.12648 6.33925 3.10083 6.4418L2.5175 8.77513C2.4678 8.97393 2.52605 9.18422 2.67093 9.32906C2.81582 9.47396 3.02611 9.53224 3.2249 9.48254L5.55821 8.8992C5.66081 8.87354 5.75444 8.82051 5.82922 8.74573L10.4075 4.16748L11.4209 3.15405C12.1044 2.47063 12.1044 1.36259 11.4209 0.679175L11.3208 0.579092ZM9.67094 1.40405C9.89873 1.17624 10.2681 1.17624 10.4959 1.40405L10.596 1.50413C10.8238 1.73194 10.8238 2.10129 10.596 2.32909L10.003 2.92206L9.09571 1.97928L9.67094 1.40405ZM8.27059 2.80439L9.17791 3.74717L5.11855 7.80656L3.88513 8.11491L4.19347 6.88151L8.27059 2.80439ZM1.33341 3.66661C1.33341 3.34445 1.59458 3.08328 1.91675 3.08328H4.83341C5.15559 3.08328 5.41675 2.82211 5.41675 2.49994C5.41675 2.17778 5.15559 1.91661 4.83341 1.91661H1.91675C0.950252 1.91661 0.166748 2.70012 0.166748 3.66661V10.0833C0.166748 11.0498 0.950252 11.8333 1.91675 11.8333H8.33341C9.29994 11.8333 10.0834 11.0498 10.0834 10.0833V7.16659C10.0834 6.84447 9.82226 6.58325 9.50008 6.58325C9.17791 6.58325 8.91675 6.84447 8.91675 7.16659V10.0833C8.91675 10.4054 8.65559 10.6666 8.33341 10.6666H1.91675C1.59458 10.6666 1.33341 10.4054 1.33341 10.0833V3.66661Z" fill="black"/>
</svg>

              Модерация
            </span>
            <span className="item-subtitle">
              Данная вкладка доступна только модераторам
            </span>
          </div>
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.247666 11.4965C0.573851 11.8369 1.10275 11.8369 1.42893 11.4965L5.51127 7.23166C6.16312 6.55075 6.16287 5.44731 5.51077 4.76665L1.42592 0.503553C1.09974 0.163122 0.570844 0.163122 0.244651 0.503553C-0.0815504 0.843992 -0.0815504 1.39594 0.244651 1.73638L3.74081 5.38515C4.06707 5.72556 4.06707 6.27755 3.74081 6.61796L0.247666 10.2636C-0.0785353 10.6041 -0.0785353 11.156 0.247666 11.4965Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
