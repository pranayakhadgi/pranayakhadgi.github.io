// project-card.js
export function generateProjectCard(project) {
    return `
    <article class="group relative bg-white border border-gray-200 rounded-lg p-8 m-8 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1"
        style="transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);">

        <!-- Media Layer -->
        <div class="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br ${project.gradientFrom} ${project.gradientVia} ${project.gradientTo} transform origin-center group-hover:scale-105 transition-transform duration-500 ease-out">
            <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-24 h-24 ${project.iconColor} group-hover:scale-105 transition-transform duration-500"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>

            <!-- Status Badge -->
            <div class="absolute top-4 right-4 z-10">
                <div class="flex flex-col gap-2">
                    <span class="inline-flex items-center px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200 backdrop-blur-sm bg-opacity-95 animate-pulse-subtle">
                        <svg class="w-3.5 h-3.5 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="whitespace-nowrap">${project.status}</span>
                    </span>
                </div>
            </div>
        </div>

        <!-- Content Layer -->
        <div class="p-6 transform group-hover:-translate-y-1 transition-transform duration-300 ease-out">
            <div class="mb-4">
                <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    ${project.title}
                </h3>
                <p class="text-sm text-${project.colorTheme}-500">${project.subtitle}</p>
            </div>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tags.map(tag => `
                    <span class="px-3 py-1 bg-${project.colorTheme}-50 text-${project.colorTheme}-700 text-sm font-medium rounded-full border border-${project.colorTheme}-200 group-hover:border-${project.colorTheme}-300 transition-colors duration-200">
                        ${tag}
                    </span>
                `).join('')}
            </div>

            <!-- Problem/Solution/Impact Sections (same for all) -->
            <div class="hidden md:block md:max-h-0 md:overflow-hidden md:group-hover:max-h-[500px] transition-all duration-500 ease-in-out">
                <div class="space-y-4">
                    <div class="border-t border-gray-200 pt-4">
                        <div class="mb-4">
                            <h4 class="font-semibold text-gray-900 mb-2 flex items-center">
                                <svg class="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                        clip-rule="evenodd" />
                                </svg>
                                Problem
                            </h4>
                            <p class="text-gray-600 text-sm leading-relaxed pl-6">
                                ${project.problem}
                            </p>
                        </div>
                        <!-- ... solution and impact sections -->
                    </div>
                </div>
            </div>
        </div>
    </article>
    `;
}