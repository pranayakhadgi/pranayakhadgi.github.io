export const projects = [
    {
        id:1,
        title:"Truman in the Virtual - Cmapus Cube",
        subtitle: "Research Project . Fall 2025",
        colorTheme: "purple",
        tags: [
            {name: "Three.js", color: "blue"}, 
            {name: "WebGL", color: "purple"}, 
            {name: "AI Voice API", color: "green"}, 
            {name: "Mapbox", color: "orange"}],
        status: "Prototype Functional",
        statusDetails: "Core 3D navigation and skybox rendering validated. Annotation system needs to be refactored due to bug issues. Redesigning interaction patterns for clarity and mobile responsiveness.",
        gradient: {
            from: "from-purple-100",
            via: "via- purple-200",
            to: "to-purple-200"
        },
        iconColor: "text-blue-300/50",
        hoverOverlay: {
            title: "3D Virtual Campus Tour",
            subtitle: "An interactive exploration system"
        },
        problem: "Parents and prospective students need remote campus exploration. Traditional static images lack interactivity and spatial awareness.",
        solution:"Built 3D web application with skybox integration, AI voice narration, and interactive annotation system for campus departments and outdoor areas.",
        impact: "Functional SaaS prototype enabling remote facility exploration. Foundation for interior touring capabilities.",
        mediaCount: 3,
        hasPulseAnimation: true
    }, 
    {
        id: 2,
        title: "Memory Garden - A Digital Journal Platform",
        subtitle: "Hack MidWest Project . Fall 2025",
        colorTheme: "emerald",
        tags: [
            { name: "Vanilla HTML", color: "yellow" },
            { name: "Node.js", color: "lime" },
            { name: "GenAI Integration", color: "sky" },
            { name: "MongoDB", color: "emerald" }
        ],
        status: "Hackathon Validated",
        statusDetails: "Journal entries and authentication system connected with MongoDB. Garden UI needs to be redrawn (pixelated). The AI API needs to be fixed with a final polishing.",
        gradient: {
            from: "from-blue-100",
            via: "via-emerald-200",
            to: "to-green-200"
        },
        iconColor: "text-green-300",
        hoverOverlay: {
            title: "Memory Garden",
            subtitle: "A digital journal platform with AI integration"
        },
        shortDescription: "Web-based digital AI-integrated journal platform with unique emotion-based flower planting system, and emotion graph modeling using MongoDB's database.",
        problem: "Users need a way to track daily mood and emotional patterns over time. Traditional journaling lacks visual feedback and engagement mechanisms.",
        solution: "Built a digital journaling platform with mood tracking system where each journal entry plants a flower representing the user's emotional state, gradually building a visual garden.",
        impact: "A platform that provides users with both written reflection and visual representation of emotional patterns over time, demonstrating proficiency in MongoDB and database management.",
        mediaCount: 3,
        hasPulseAnimation: false
    },
    {
        id: 3,
        title: "Safe Walk Plus - A routing system for safer walking",
        subtitle: "Group Project . Winter Break 2025 (continues)",
        colorTheme: "red",
        tags: [
            { name: "Java 17+", color: "amber" },
            { name: "Graph Algorithms", color: "indigo" },
            { name: "Routing Models", color: "purple" },
            { name: "JUnit", color: "orange" }
        ],
        status: "Core Logic Implemented",
        statusDetails: "Algorithm and Logic testing complete. Currently working on a JavaFX map template through route testing.",
        gradient: {
            from: "from-red-100",
            via: "via-red-200",
            to: "to-red-200"
        },
        iconColor: "text-orange-300",
        hoverOverlay: {
            title: "SafeWalk Plus",
            subtitle: "A routing system for safer walking"
        },
        shortDescription: "A routing system for safer walking using graph algorithms and routing models.",
        problem: "Users need routing that considers both safety and efficiency, especially when traveling at different times of day when risk factors vary.",
        solution: "Implemented graph data structure using Dijkstra and A* algorithms to find optimal routes balancing safety and speed based on time of day. Applied graph algorithms for pathfinding and route optimization.",
        impact: "The system provides users with route recommendations that prioritize safety while maintaining reasonable travel time, demonstrating machine learning in navigation systems.",
        mediaCount: 3,
        hasPulseAnimation: false
    }
];