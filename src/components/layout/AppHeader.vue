<template>
    <header class="w-full">
        <div class="max-w-6xl" mx-auto flex items-center justify-between py-4 px-4>
            <div class="flex items-center gap-2">
                <div class="h-8 w-8 bd-emerald-500 rounded-full"></div>
                <span class="front-semibold text-lg"></span>
            </div>
        </div>
        <div class="flex-1 m-8">
            <input 
            type="text" 
            placeholder="Search destinations, experiences ..."
            class="w-full border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <nav>
                <ul class="flex items-center gap-6 text-sm front-medium">
                    <li class="text-emerald-600 border-b-2 border-emerald-600 pb-1 cursor-pointer">
                        News
                    </li>
                    <li class="cursor-pointer text-gray-700">Explore</li>
                    <li class="cursor-pointer text-gray-700">Guiders</li>
                    <li class="cursor-pointer text-gray-700">Food</li>
                    <li class="cursor-pointer text-gray-700">Stay</li>
                </ul>
            </nav>
        </div>
    </header>
</template>