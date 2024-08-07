<template>
  <ul class="countries" :class="'countries--' + place">
    <li
      v-for="{name, _id, flag} in countries"
      @mouseenter="activeTooltip = name"
      @mouseleave="activeTooltip = ''"
      class="countries__item"
      :id="_id"
    >
      <img :src="flag.src" width="35" height="24" :alt="flag.alt">
      <span class="countries__name">{{ name }}</span>
      <Transition>
        <Tooltip v-if="activeTooltip === name" class="countries__tooltip">{{ name }}</Tooltip>
      </Transition>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  countriesIds: {
    type: Array,
    required: true
  },
  place: {
    type: String,
    required: true
  }
});

const countriesStore = useCountriesStore();

const activeTooltip = ref('');

const countries = computed(() => {
  return countriesStore.countries.filter((country) => props.countriesIds.find((id) => id === country._id));
});
</script>

<style lang="scss" scoped>
.countries {
  @include reset-list;
  display: flex;
  flex-wrap: wrap;
}

.countries img {
  border-radius: 4px;
}

.countries__item {
  position: relative;
}

.countries__name {
  display: none;
}

.countries--promo {
  gap: 10px 20px;
}


.countries--catalog {
  flex-direction: column;
  row-gap: 10px;

  @media (min-width: $tablet-width) {
    flex-direction: row;
    gap: 25px;
  }

  @media (min-width: $desktop-width) {
    flex-direction: column;
    row-gap: 12px;
  }
}

.countries--catalog .countries__item {
  display: flex;
  align-items: center;
  column-gap: 14px;

  @media (min-width: $tablet-width) {
    column-gap: 11px;
  }

  @media (min-width: $desktop-width) {
    column-gap: 18px;
  }
}

.countries--catalog img {
  @media (max-width: $pre-tablet-width) {
    width: 26px;
    height: 18px;
    border-radius: 3px;
  }
}

.countries--catalog .countries__name {
  display: block;
  font-size: 15px;
  line-height: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: $basic-blue-light;

  @media (min-width: $tablet-width) {
    font-size: 20px;
    line-height: 20px;
  }
}

.countries--catalog .countries__tooltip {
  display: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>