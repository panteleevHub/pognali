<template>
  <form @submit.prevent="onFormSubmit" class="filter">
    <h3 class="visually-hidden">Фильтр попутчиков</h3>
    <p class="filter__caption">Подберите идеального попутчика</p>
    <div class="filter__options">
      <fieldset class="filter__field field">
        <h4 @click="onCaptionClick" class="field__caption" tabindex="0">Цель поездки<span>:</span></h4>
        <div class="field__container">
          <ul class="field__list">
            <li v-for="{ value, name } in filterData.purpose">
              <input
                v-model="selectedData.purpose"
                :value="value"
                :id="value"
                type="checkbox"
              >
              <label :for="value">{{ name }}</label>
            </li>
          </ul>
        </div>
      </fieldset>
      <fieldset class="filter__field field">
        <h4 @click="onCaptionClick" class="field__caption" tabindex="0">Музыка<span>:</span></h4>
        <div class="field__container">
          <ul class="field__list">
            <li v-for="{ value, name } in filterData.music">
              <input
                v-model="selectedData.music"
                :value="value"
                :id="value"
                type="checkbox"
              >
              <label :for="value">{{ name }}</label>
            </li>
          </ul>
        </div>
      </fieldset>
      <fieldset class="filter__field field">
        <h4 @click="onCaptionClick" class="field__caption" tabindex="0">Транспорт<span>:</span></h4>
        <div class="field__container">
          <ul class="field__transport">
            <li>
              <input
                v-model="selectedData.transport"
                value="plane"
                id="plane"
                type="checkbox"
              >
              <label for="plane">
                <svg :opacity="!selectedData.transport.includes('plane') && 0.15" id="icon-plane" width="16" height="16" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7831 2.09314C16.0546 2.26635 15.3227 2.44038 15.0504 2.91723L12.9433 7.11585L1.62916 9.8059L1.17076 11.1474L9.82861 11.9662L8.35967 15.6009L5.07624 16.3816L4.25187 17.8101L6.62062 18.0673L6.89073 19.2357C7.01174 19.6498 7.43649 19.9263 7.79903 19.8401L8.89351 19.5799L10.1622 21.7433L10.9866 20.3148L10.1763 16.8098L12.5535 13.7795L17.0895 21.741L18.0042 20.7031L15.2128 8.62921L17.7762 4.73424C18.0519 4.25657 17.8721 3.47891 17.6914 2.69759C17.6019 2.31059 17.1457 2.00694 16.7831 2.09314Z" fill="#101D41"/>
                </svg>
              </label>
            </li>
            <li>
              <input
                v-model="selectedData.transport"
                value="auto"
                id="auto"
                type="checkbox"
              >
              <label for="auto">
                <svg :opacity="!selectedData.transport.includes('auto') && 0.15" id="icon-auto" width="16" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.34046 13.9485C4.34046 13.5699 4.20185 13.2467 3.92462 12.9788C3.64739 12.711 3.31288 12.5771 2.92106 12.5771C2.52925 12.5771 2.19473 12.711 1.91751 12.9788C1.64028 13.2467 1.50167 13.5699 1.50167 13.9485C1.50167 14.3271 1.64028 14.6503 1.91751 14.9181C2.19473 15.186 2.52925 15.3199 2.92106 15.3199C3.31288 15.3199 3.64739 15.186 3.92462 14.9181C4.20185 14.6503 4.34046 14.3271 4.34046 13.9485ZM15.6956 13.9485C15.6956 13.5699 15.557 13.2467 15.2798 12.9788C15.0025 12.711 14.668 12.5771 14.2762 12.5771C13.8844 12.5771 13.5499 12.711 13.2727 12.9788C12.9954 13.2467 12.8568 13.5699 12.8568 13.9485C12.8568 14.3271 12.9954 14.6503 13.2727 14.9181C13.5499 15.186 13.8844 15.3199 14.2762 15.3199C14.668 15.3199 15.0025 15.186 15.2798 14.9181C15.557 14.6503 15.6956 14.3271 15.6956 13.9485ZM15.1855 9.70563L14.3871 5.59135C14.3501 5.42706 14.267 5.29313 14.1376 5.18956C14.0082 5.08599 13.8585 5.0342 13.6885 5.0342H3.50878C3.33875 5.0342 3.18905 5.08599 3.05968 5.18956C2.9303 5.29313 2.84714 5.42706 2.81017 5.59135L2.01176 9.70563C1.9748 9.91992 2.02655 10.1092 2.16701 10.2735C2.30747 10.4378 2.48859 10.5199 2.71037 10.5199H14.4869C14.7087 10.5199 14.8898 10.4378 15.0303 10.2735C15.1707 10.1092 15.2225 9.91992 15.1855 9.70563ZM12.6794 3.14849C12.6794 3.00563 12.6276 2.88421 12.5242 2.78421C12.4207 2.68421 12.295 2.63421 12.1471 2.63421H5.05015C4.9023 2.63421 4.77663 2.68421 4.67313 2.78421C4.56963 2.88421 4.51788 3.00563 4.51788 3.14849C4.51788 3.29135 4.56963 3.41278 4.67313 3.51278C4.77663 3.61278 4.9023 3.66278 5.05015 3.66278H12.1471C12.295 3.66278 12.4207 3.61278 12.5242 3.51278C12.6276 3.41278 12.6794 3.29135 12.6794 3.14849ZM17.115 10.9163V17.3771H15.6956V18.7485C15.6956 19.1271 15.557 19.4503 15.2798 19.7181C15.0025 19.986 14.668 20.1199 14.2762 20.1199C13.8844 20.1199 13.5499 19.986 13.2727 19.7181C12.9954 19.4503 12.8568 19.1271 12.8568 18.7485V17.3771H4.34046V18.7485C4.34046 19.1271 4.20185 19.4503 3.92462 19.7181C3.64739 19.986 3.31288 20.1199 2.92106 20.1199C2.52925 20.1199 2.19473 19.986 1.91751 19.7181C1.64028 19.4503 1.50167 19.1271 1.50167 18.7485V17.3771H0.0822754V10.9163C0.0822754 10.1163 0.174684 9.31992 0.359501 8.52706L1.50167 3.66278C1.5682 3.10563 1.9286 2.61635 2.58285 2.19492C3.2371 1.77349 4.08726 1.45564 5.13332 1.24135C6.17939 1.02706 7.33449 0.919922 8.59864 0.919922C9.86279 0.919922 11.0179 1.02706 12.064 1.24135C13.11 1.45564 13.9602 1.77349 14.6144 2.19492C15.2687 2.61635 15.6291 3.10563 15.6956 3.66278L16.86 8.52706C17.03 9.25563 17.115 10.0521 17.115 10.9163Z" fill="#1D2E5B"/>
                </svg>
              </label>
            </li>
            <li>
              <input
                v-model="selectedData.transport"
                value="bike"
                id="bike"
                type="checkbox"
              >
              <label for="bike">
                <svg :opacity="!selectedData.transport.includes('bike') && 0.15" id="icon-bike" width="16" height="16" viewBox="0 0 25 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3075 21C17.4664 21 16.6442 20.7471 15.9449 20.2732C15.2456 19.7994 14.7005 19.1258 14.3786 18.3378C14.0568 17.5498 13.9726 16.6827 14.1366 15.8462C14.3007 15.0096 14.7057 14.2412 15.3005 13.6381C15.8952 13.035 16.6529 12.6243 17.4779 12.4579C18.3028 12.2915 19.1578 12.3769 19.9349 12.7033C20.7119 13.0297 21.3761 13.5824 21.8434 14.2916C22.3106 15.0008 22.5601 15.8346 22.5601 16.6875C22.5588 17.8309 22.1104 18.927 21.3132 19.7355C20.5159 20.544 19.435 20.9988 18.3075 21ZM18.3075 13.875C17.759 13.875 17.2228 14.04 16.7667 14.349C16.3106 14.658 15.9551 15.0973 15.7452 15.6112C15.5353 16.1251 15.4804 16.6906 15.5874 17.2362C15.6944 17.7818 15.9585 18.2829 16.3464 18.6762C16.7343 19.0696 17.2284 19.3374 17.7664 19.446C18.3044 19.5545 18.8621 19.4988 19.3688 19.2859C19.8756 19.073 20.3088 18.7126 20.6135 18.25C20.9182 17.7875 21.0809 17.2438 21.0809 16.6875C21.08 15.9418 20.7876 15.227 20.2676 14.6997C19.7477 14.1725 19.0428 13.8759 18.3075 13.875Z" fill="#1D2E5B"/>
                  <path d="M6.10449 21C5.26342 21 4.44123 20.7471 3.7419 20.2732C3.04257 19.7994 2.4975 19.1258 2.17564 18.3378C1.85377 17.5498 1.76956 16.6827 1.93364 15.8462C2.09773 15.0096 2.50275 14.2412 3.09748 13.6381C3.69221 13.035 4.44994 12.6243 5.27486 12.4579C6.09978 12.2915 6.95482 12.3769 7.73188 12.7033C8.50893 13.0297 9.17309 13.5824 9.64037 14.2916C10.1076 15.0008 10.3571 15.8346 10.3571 16.6875C10.3558 17.8309 9.9074 18.927 9.11016 19.7355C8.31291 20.544 7.23197 20.9988 6.10449 21ZM6.10449 13.875C5.55596 13.875 5.01975 14.04 4.56367 14.349C4.10758 14.658 3.75211 15.0973 3.5422 15.6112C3.33228 16.1251 3.27736 16.6906 3.38437 17.2362C3.49139 17.7818 3.75553 18.2829 4.1434 18.6762C4.53126 19.0696 5.02544 19.3374 5.56343 19.446C6.10142 19.5545 6.65906 19.4988 7.16583 19.2859C7.67261 19.073 8.10575 18.7126 8.4105 18.25C8.71525 17.7875 8.8779 17.2438 8.8779 16.6875C8.87705 15.9418 8.58458 15.227 8.06465 14.6997C7.54472 14.1725 6.83979 13.8759 6.10449 13.875Z" fill="#1D2E5B"/>
                  <path d="M15.1644 6.00005C15.3592 6.00073 15.5522 5.96225 15.7323 5.88681C15.9123 5.81138 16.0759 5.7005 16.2134 5.56058C16.351 5.42065 16.4598 5.25447 16.5336 5.07163C16.6074 4.88879 16.6448 4.69293 16.6435 4.49536C16.6457 4.29878 16.6092 4.10374 16.5361 3.92164C16.4631 3.73954 16.3549 3.57403 16.2181 3.4348C16.0812 3.29558 15.9183 3.18542 15.739 3.11077C15.5597 3.03612 15.3675 2.99848 15.1736 3.00005C14.9794 2.99943 14.7869 3.03762 14.6072 3.11243C14.4275 3.18725 14.2641 3.29722 14.1263 3.43607C13.9885 3.57493 13.8791 3.73994 13.8042 3.92169C13.7293 4.10344 13.6904 4.29838 13.6898 4.49536C13.6892 4.69234 13.7269 4.88752 13.8007 5.06974C13.8744 5.25197 13.9829 5.41767 14.1198 5.55739C14.2567 5.69712 14.4194 5.80812 14.5987 5.88407C14.7779 5.96002 14.9701 5.99943 15.1644 6.00005Z" fill="#1D2E5B"/>
                  <path d="M17.3622 9.00003H15.3395C15.3063 9.00004 15.2737 8.99099 15.2452 8.97384C15.2167 8.95668 15.1932 8.93205 15.1773 8.90253L13.7101 6.17581C13.6068 5.97318 13.4578 5.79807 13.2753 5.66467C13.0928 5.53127 12.8818 5.44333 12.6596 5.40795C12.4373 5.37258 12.21 5.39077 11.996 5.46106C11.7819 5.53135 11.5872 5.65175 11.4276 5.81253L8.19843 9.11253C7.92715 9.39333 7.77316 9.76945 7.76855 10.1625C7.76855 10.9782 8.35097 11.2688 8.62369 11.4328C9.94106 12.2025 10.8688 12.7655 11.3777 13.0782C11.4047 13.0949 11.4271 13.1183 11.4427 13.1463C11.4582 13.1743 11.4664 13.2059 11.4664 13.238V16.478C11.4664 16.8816 11.7724 17.228 12.1704 17.2482C12.2703 17.253 12.3702 17.2373 12.464 17.2019C12.5577 17.1666 12.6434 17.1123 12.7159 17.0423C12.7883 16.9724 12.8461 16.8883 12.8855 16.7951C12.925 16.7018 12.9455 16.6015 12.9456 16.5V12.4688C12.9457 12.3497 12.9178 12.2324 12.8642 12.1264C12.8107 12.0204 12.7331 11.9289 12.6377 11.8594L10.9275 10.6121C10.906 10.5965 10.8881 10.5764 10.8749 10.5532C10.8617 10.53 10.8536 10.5043 10.851 10.4776C10.8485 10.451 10.8516 10.4241 10.8602 10.3988C10.8687 10.3734 10.8825 10.3503 10.9007 10.3308L12.842 8.23128C12.862 8.20968 12.8866 8.19316 12.914 8.18307C12.9414 8.17297 12.9708 8.1696 12.9997 8.17321C13.0287 8.17682 13.0563 8.18731 13.0805 8.20384C13.1047 8.22037 13.1247 8.24246 13.1388 8.26831L14.1474 10.1143C14.2115 10.2313 14.3053 10.3288 14.4191 10.3966C14.5329 10.4644 14.6625 10.5001 14.7945 10.5H17.383C17.4832 10.5002 17.5824 10.4796 17.6745 10.4397C17.7667 10.3998 17.8498 10.3413 17.919 10.2678C17.9882 10.1942 18.0419 10.1073 18.0769 10.012C18.1119 9.91685 18.1274 9.81542 18.1226 9.71394C18.1032 9.31035 17.7602 9.00003 17.3622 9.00003Z" fill="#1D2E5B"/>
                </svg>
              </label>
            </li>
            <li>
              <input
                v-model="selectedData.transport"
                value="walk"
                id="walk"
                type="checkbox"
              >
              <label for="walk">
                <svg :opacity="!selectedData.transport.includes('walk') && 0.15" id="icon-walk" width="16" height="16" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9758 5.75992C15.9264 5.75992 16.697 4.90031 16.697 3.83992C16.697 2.77954 15.9264 1.91992 14.9758 1.91992C14.0252 1.91992 13.2546 2.77954 13.2546 3.83992C13.2546 4.90031 14.0252 5.75992 14.9758 5.75992Z" fill="#1D2E5B"/>
                  <path d="M13.9233 10.5302C14.1209 10.8586 14.4043 11.1113 14.735 11.2538C15.0657 11.3964 15.4277 11.4219 15.7719 11.327L18.6256 10.5312L18.21 8.66881L15.3562 9.46465L14.1695 7.48033C13.9159 7.05655 13.5224 6.76184 13.0748 6.66049L9.76493 5.92129C9.39465 5.83839 9.01021 5.89379 8.67097 6.07893C8.33173 6.26406 8.05657 6.56863 7.88797 6.94561L6.4611 10.129L8.00071 10.9882L9.42758 7.80385L11.1204 8.18209L6.74338 16.32H2.92749V18.24H6.74338C7.34407 18.24 7.90949 17.8829 8.2193 17.3078L9.86993 14.2397L14.3184 15.2323L15.8812 20.4634L17.5129 19.8557L15.9509 14.6256C15.8545 14.3045 15.684 14.0174 15.4564 13.7933C15.2289 13.5691 14.9524 13.4158 14.6548 13.3488L12.0395 12.7661L13.5645 9.93025L13.9233 10.5302Z" fill="#1D2E5B"/>
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </fieldset>
      <fieldset class="filter__field field">
        <h4 @click="onCaptionClick" class="field__caption" tabindex="0">Возраст<span>:</span></h4>
        <div class="field__container">
          <DoubleRangeSlider
            v-model:minRange="filterData.age.min"
            v-model:maxRange="filterData.age.max"
            v-model:step="filterData.age.step"
            v-model:value="selectedData.age"
          />
        </div>      
      </fieldset>
      <fieldset class="filter__field field">
        <h4 @click="onCaptionClick" class="field__caption" tabindex="0">Левел<span>:</span></h4>
        <div class="field__container">
          <DoubleRangeSlider
            v-model:minRange="filterData.level.min"
            v-model:maxRange="filterData.level.max"
            v-model:step="filterData.level.step"
            v-model:value="selectedData.level"
          />
        </div>
      </fieldset>
    </div>
    <button class="filter__submit" type="submit">Показать</button>
    <button
      @click="onResetButtonClick"
      :disabled="isResetButtonDisabled"
      class="filter__reset"
      type="button"
    >
      Сбросить фильтр
    </button>
  </form>
</template>

<script setup>
const filtersStore = useFiltersStore();
const { selectedUserData, initialUserData } = storeToRefs(filtersStore);

const filterData = {
  purpose: [
    {
      name: 'Отдых',
      value: 'vacation',
    },
    {
      name: 'Работа',
      value: 'work',
    },
    {
      name: 'Учеба',
      value: 'study',
    },
  ],
  music: [
    {
      name: 'Рок',
      value: 'rock',
    },
    {
      name: 'Рэп',
      value: 'rap',
    },
    {
      name: 'Поп',
      value: 'pop',
    },
    {
      name: 'Техно',
      value: 'techno',
    },
    {
      name: 'Классика',
      value: 'classical',
    },
    {
      name: 'Джаз',
      value: 'jazz',
    },
  ],
  age: {
    min: 1,
    max: 100,
    step: 1,
  },
  level: {
    min: 1,
    max: 100,
    step: 1,
  },
};

const selectedData = ref(getDeepObjectCopy(selectedUserData.value));

const onFormSubmit = () => {
  filtersStore.setUserData(getDeepObjectCopy(selectedData.value));
};

const onCaptionClick = ({target}) => {
  target.classList.toggle('field__caption--opened');
};

const onResetButtonClick = () => {
  filtersStore.resetUserFilter();
  selectedData.value = getDeepObjectCopy(initialUserData.value);
};

const isResetButtonDisabled = computed(() => {
  return JSON.stringify(selectedUserData.value) === JSON.stringify(initialUserData.value);
});

</script>

<style lang="scss" scoped>
.filter {
  padding: 20px;
  background-color: $basic-yellow;
  border-radius: 20px;

  @media (min-width: $tablet-width) {
    padding: 35px;
  }

  @media (min-width: $desktop-width) {
    width: 285px;
    padding: 45px; 
  }
}

.filter__caption {
  max-width: 200px;
  font-size: 22px;
  line-height: 22px;
  font-weight: 700;
  color: $basic-blue-light;
  margin: 0;
  margin-bottom: 23px;

  @media (min-width: $tablet-width) {
    max-width: none;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 40px;
  }

  @media (min-width: $desktop-width) {
    margin-bottom: 23px;
  }
}

.filter__options {
  position: relative;

  @media (min-width: $tablet-width) and (max-width: $pre-desktop-width) {
    @include flex-column;
    row-gap: 25px;
    padding: 35px 0;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: rgba($basic-blue-light, 0.1); 
    }

    &::after {
      top: 100%;
    }
  }
}

.field {
  position: relative;
  padding: 0;
  margin: 0;
  border: none;

  @media (min-width: $tablet-width) and (max-width: $pre-desktop-width) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
  }
}

.field__caption {
  position: relative;
  width: 100%;
  font-family: inherit;
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: $basic-blue-light;
  padding: 12px 0;
  margin: 0;
  cursor: pointer;

  @media (min-width: $tablet-width) and (max-width: $pre-desktop-width) {
    padding: 0;
    cursor: auto;
  }

  span {
    display: none;

    @media (min-width: $tablet-width) and (max-width: $pre-desktop-width) {
      display: inline;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 6px;
    height: 10px;
    transform: translateY(-50%) rotate(-90deg);
    background: url('@/assets/img/icon-page-arrow.svg') no-repeat;
    background-size: 6px 10px;

    @media (min-width: $tablet-width) {
      display: none;
    }
  }
}

.field__caption--opened {
  &::after {
    transform: translateY(-50%) rotate(90deg);
  }
}

.field__container {
  display: none;
  padding: 5px 0 20px;

  @media (min-width: $tablet-width) {
    display: block;
  }

  @media (min-width: $tablet-width) and (max-width: $pre-desktop-width) {
    padding: 0;
  }
}

.field__caption--opened + .field__container {
  display: block;
}

.field__list {
  @include reset-list;
  @include flex-column;
  row-gap: 12px;

  @media (min-width: $tablet-width) and (max-width: $pre-desktop-width) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px 20px;
  }

  @media (min-width: $desktop-width) {
    row-gap: 16px;
  }
}

.field__list li {
  position: relative;
  font-size: 15px;
  line-height: 18px;
  color: $black;
  
  @media (min-width: $tablet-width) {
    font-size: 20px;
    line-height: 20px;
  }
}

.field__list input {
  display: none;
  
  &:checked + label::before {
    background: $white url('@/assets/img/icon-check-mark.svg') center no-repeat;

    @media (min-width: $tablet-width) {
      background-size: 14px 14px; 
    }
  }
}

.field__list label {
  padding-left: 28px;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    padding-left: 32px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    background-color: $white;
    border-radius: 4px;

    @media (min-width: $tablet-width) {
      width: 20px;
      height: 20px;
    }
  }
}

.field__transport {
  @include reset-list;
  display: flex;
  column-gap: 2px;
}

.field__transport input {
  display: none;
}

.field__transport label {
  position: relative;
  display: block;
  width: 32px;
  height: 32px;
  background-color: $white;
  border-radius: 50%;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    width: 44px;
    height: 44px; 
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: $tablet-width) {
      width: 23px;
      height: 22px;
    }
  }
}

.filter__submit {
  width: 100%;
  font-family: inherit;
  font-size: 17px;
  line-height: 17px;
  font-weight: 700;
  text-transform: uppercase;
  color: $basic-blue;
  background-color: $white;
  padding: 12px 20px;
  margin: 8px 0 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    font-size: 20px;
    line-height: 20px;
    padding: 15px 25px;
    margin: 16px 0 30px;
  }

  &:hover,
  &:focus {
    box-shadow: 0 3px 6px rgba($black, 0.14);
  }
  
  &:active,
  &:disabled {
    background-color: $special-yellow-dark;
    opacity: 0.5;
  }
}

.filter__reset {
  width: 100%;
  font-family: inherit;
  font-size: 17px;
  line-height: 17px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  text-decoration: underline;
  color: $basic-blue;
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;

  @media (min-width: $tablet-width) {
    font-size: 18px;
    line-height: 18px;
  }

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
    cursor: auto;
  }
}
</style>