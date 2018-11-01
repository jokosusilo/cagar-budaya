<template>
  <div id="app">
    <div class="flex items-center justify-between bg-white shadow py-4 px-8">
      <router-link to="/" class="no-underline">
        <h1 class="text-grey-darkest font-normal text-2xl">Cagar Budaya</h1>
      </router-link>
      <div class="flex justify-end">
        <router-link to="/about" class="block py-2 px-1 md:px-4 text-sm no-underline tracking-wide text-grey-darkest">
          <svg class="feather feather-info sc-dnqmqq jxshSx h-4 inline-block align-middle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="8"></line>
          </svg>
          <span class="align-middle hidden md:inline-block">About</span>
        </router-link>
      </div>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<style>
</style>