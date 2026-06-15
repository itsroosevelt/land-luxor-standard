export interface JobDetails {
    title: string;
    compensation: string;
    about: string;
    role: string;
    own: string[];
    requirements: string[];
    why: string;
}

export interface Job {
    id: string;
    department: 'blockchain' | 'ai' | 'product' | 'marketing' | 'operations' | 'ceo_staff';
    employeeTime: 'full_part_time';
    location: 'us_latam';
    locationType: 'remote' | 'onsite';
    language: 'bilingual' | 'english' | 'spanish';
    en: JobDetails;
    es: JobDetails;
}

const ABOUT_LUXOR_EN = "Luxor is an innovative fintech company incorporated in Salt Lake City, Utah, with a mission to build a new global financial system. We are uniting the economic race of all the Americas, making capital flow frictionlessly from North America to South America, bringing the world into a future of abundance. We believe Artificial Intelligence is deflationary and digital assets will drive global finance in the coming years. To make this a reality, we have created Luxor Pay (our Solana-focused payment gateway), Royalty Decentralized Institution (our non-custodial wallet ecosystem), and advanced Smart Glasses natively connected to Roosevelt Artificial Intelligence (RAI), our autonomous AI agent. We don't focus strictly on degrees or formal titles; we prioritize experience, dedication, and the willingness to learn and contribute to this financial revolution.";

const ABOUT_LUXOR_ES = "Luxor es una empresa de tecnología financiera constituida en Salt Lake City, Utah, con la misión de construir el nuevo sistema financiero mundial. Estamos uniendo la carrera económica de todas las Américas, haciendo que el dinero fluya sin fricciones desde el norte hasta el sur del continente para llevar al mundo a un futuro de abundancia. Creemos firmemente que la Inteligencia Artificial es deflacionaria y los activos digitales moverán la economía global. Para hacerlo realidad, hemos creado Luxor Pay (nuestra pasarela de pagos en Solana), Royalty Decentralized Institution (nuestro ecosistema de billetera descentralizada) y Gafas Inteligentes avanzadas conectadas de forma nativa a Roosevelt Artificial Intelligence (RAI), nuestro agente cognitivo autónomo. No nos enfocamos en títulos formales, sino en la experiencia, dedicación y disposición para aprender y aportar a esta revolución.";

export const JOBS_DATA: Job[] = [
    {
        id: 'lead_solana',
        department: 'blockchain',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Lead Solana / Rust Developer",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You'll act as the principal architect of our Solana programs. You'll own Anchor smart contract development, protocol security, RWA integration (oracles, collateralization), and optimization of fees and performance. You will build and set the technical standards for our core token economy.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Architect and write secure Solana programs using Rust and the Anchor framework",
                "Integrate real-world asset (RWA) protocols including oracles and collateral mechanisms",
                "Optimize transaction fees, gas, and overall program execution for LXR, XLS, and USDX",
                "Collaborate with security auditors to protect our on-chain assets from potential vulnerabilities",
                "Review code and mentor junior developers in the blockchain team"
            ],
            requirements: [
                "4+ years of professional Rust experience, with 2+ years writing Solana programs",
                "Deep understanding of the Solana programming model, PDAs, account serialization, and SPL tokens",
                "Familiarity with tools like Antigravity, Claude, and Cursor to supercharge your workflow",
                "Bilingual fluency in English and Spanish (Highly preferred)",
                "Strong alignment with building open-source systems on Solana"
            ],
            why: "You will build the core financial infrastructure of an ecosystem powered by AI and secured by RWA on Solana from day one."
        },
        es: {
            title: "Lead Solana / Rust Developer",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Actuarás como el arquitecto principal de nuestros programas en Solana. Liderarás el desarrollo de contratos inteligentes en Anchor, la seguridad del protocolo, la integración de RWA (oráculos, colateralización) y la optimización de comisiones y rendimiento. Establecerás los estándares técnicos para nuestra economía de tokens.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Diseñar y escribir programas seguros en Solana usando Rust y el framework Anchor",
                "Integrar protocolos de activos del mundo real (RWA) incluyendo oráculos y mecanismos de colateral",
                "Optimizar comisiones de transacción y la ejecución general de los programas para LXR, XLS y USDX",
                "Colaborar con auditores de seguridad para proteger nuestros activos en cadena de vulnerabilidades",
                "Revisar código y guiar a desarrolladores junior en el equipo de blockchain"
            ],
            requirements: [
                "4+ años de experiencia profesional en Rust, con 2+ años escribiendo programas en Solana",
                "Comprensión profunda del modelo de programación de Solana, PDAs, serialización de cuentas y tokens SPL",
                "Familiaridad con herramientas como Antigravity, Claude y Cursor para optimizar tu flujo de trabajo",
                "Fluidez bilingüe en inglés y español (Muy valorado)",
                "Fuerte alineación con la construcción de sistemas de código abierto en Solana"
            ],
            why: "Construirás la infraestructura financiera central de un ecosistema impulsado por IA y respaldado por RWA en Solana desde el primer día."
        }
    },
    {
        id: 'senior_solana',
        department: 'blockchain',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Senior Solana Developer (Web3 & Integrations)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will focus on connecting our Solana smart contracts with frontend applications, private RPCs, wallets, and SDKs. You will handle libraries like @solana/web3.js with 9-decimal precision, ensuring perfect user transactions.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Build and maintain typescript Web3 SDKs for integration with frontends and external partners",
                "Interact with private RPC endpoints and optimize Web3 connection reliability",
                "Ensure precise transaction building and signing for complex split token operations",
                "Debug and resolve Web3 connection errors on client platforms",
                "Assist front-end developers in integrating wallet-adapter capabilities"
            ],
            requirements: [
                "3+ years of experience in Web3 integration with TypeScript and Node.js",
                "Familiarity with @solana/web3.js, @solana/spl-token, and wallet-adapter standards",
                "Experience using Cursor, Claude, and Antigravity for rapid development",
                "Bilingual proficiency in English and Spanish"
            ],
            why: "You will enable the frictionless connection of our multi-token Solana economy to consumers and merchants globally."
        },
        es: {
            title: "Senior Solana Developer (Web3 & Integraciones)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Te enfocarás en conectar nuestros contratos inteligentes de Solana con aplicaciones frontend, RPCs privadas, billeteras y SDKs. Manejarás librerías como @solana/web3.js con precisión de 9 decimales, garantizando transacciones perfectas.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Construir y mantener SDKs Web3 en TypeScript para integraciones con frontends y socios externos",
                "Interactuar con endpoints de RPC privados y optimizar la confiabilidad de la conexión Web3",
                "Garantizar la construcción y firma precisa de transacciones para operaciones complejas de tokens",
                "Depurar y resolver errores de conexión Web3 en plataformas de clientes",
                "Ayudar a los desarrolladores frontend a integrar capacidades de wallet-adapter"
            ],
            requirements: [
                "3+ años de experiencia en integración Web3 con TypeScript y Node.js",
                "Familiaridad con @solana/web3.js, @solana/spl-token y estándares de wallet-adapter",
                "Experiencia utilizando Cursor, Claude y Antigravity para un desarrollo rápido",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Habilitarás la conexión sin fricciones de nuestra economía multi-token en Solana con consumidores y comercios a nivel global."
        }
    },
    {
        id: 'smart_contract_auditor',
        department: 'blockchain',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'english',
        en: {
            title: "Smart Contract Auditor",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "Security is the absolute core of the Luxor RWA and stablecoin protocols. You will perform in-depth threat modeling, manual code reviews, and automated testing of Solana Rust programs to identify vulnerabilities and design flaws before public mainnet launches.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Conduct comprehensive smart contract audits and generate detailed security reports",
                "Design test suites, fuzz testing, and formal verification models for Anchor programs",
                "Collaborate with development teams to remediate identified security vulnerabilities",
                "Verify protocol designs against mathematical and logical exploits"
            ],
            requirements: [
                "3+ years specializing in blockchain security and smart contract auditing",
                "Proven track record of finding critical vulnerabilities in Rust or Solana programs",
                "Familiarity with modern AI security review processes",
                "Professional proficiency in English"
            ],
            why: "You will serve as the final shield protecting billions of dollars in on-chain assets and tokenized collateral."
        },
        es: {
            title: "Auditor de Smart Contracts",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "La seguridad es el núcleo absoluto de los protocolos RWA y stablecoin de Luxor. Realizarás modelado de amenazas en profundidad, revisiones manuales de código y pruebas automatizadas de programas Rust en Solana para identificar vulnerabilidades antes del lanzamiento en mainnet.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Realizar auditorías integrales de contratos inteligentes y generar reportes de seguridad detallados",
                "Diseñar suites de prueba, pruebas de fuzzing y modelos de verificación formal para programas Anchor",
                "Colaborar con los equipos de desarrollo para remediar las vulnerabilidades de seguridad identificadas",
                "Verificar los diseños del protocolo contra exploits matemáticos y lógicos"
            ],
            requirements: [
                "3+ años especializado en seguridad blockchain y auditoría de contratos inteligentes",
                "Historial comprobado en la detección de vulnerabilidades críticas en programas Rust/Solana",
                "Familiaridad con procesos modernos de revisión de seguridad con IA",
                "Fluidez profesional en inglés"
            ],
            why: "Serás el escudo final que proteja millones de dólares en activos on-chain y colaterales tokenizados."
        }
    },
    {
        id: 'ai_engineer',
        department: 'ai',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'english',
        en: {
            title: "AI Engineer / LLM Specialist",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will build agentic AI workflows that interact with blockchain APIs and hardware endpoints. You will work with LangChain, CrewAI, model fine-tuning, and RAG architectures to power our Roosevelt AI (RAI) cognitive system.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Design and deploy LLM agent systems capable of automated financial reasoning",
                "Implement fine-tuning pipelines and evaluate model outputs for accuracy and safety",
                "Integrate vector databases and develop retrieval-augmented generation (RAG) pipelines",
                "Connect LLM logic to smart glasses API endpoints"
            ],
            requirements: [
                "3+ years building production systems using LLMs and agent frameworks",
                "Expert Python skills and experience with vector databases (Pinecone, pgvector)",
                "Willingness to learn and adopt advanced workspace tools like Antigravity, Claude, and Cursor",
                "Fluent English speaker"
            ],
            why: "You will define the intelligence layer that coordinates autonomous business administration and on-chain capital management."
        },
        es: {
            title: "AI Engineer / LLM Specialist",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Construirás flujos de trabajo de IA agéntica que interactúan con APIs de blockchain y endpoints de hardware. Trabajarás con LangChain, CrewAI, fine-tuning y arquitecturas RAG para potenciar nuestro sistema cognitivo Roosevelt AI (RAI).\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Diseñar y desplegar sistemas de agentes LLM capaces de razonamiento financiero automatizado",
                "Implementar pipelines de fine-tuning y evaluar las salidas del modelo para precisión y seguridad",
                "Integrar bases de datos vectoriales y desarrollar flujos de generación aumentada por recuperación (RAG)",
                "Conectar la lógica de LLM a los endpoints de API de las gafas inteligentes"
            ],
            requirements: [
                "3+ años construyendo sistemas en producción utilizando LLMs y frameworks de agentes",
                "Habilidades expertas en Python y experiencia con bases de datos vectoriales",
                "Disposición para aprender y adoptar herramientas avanzadas como Antigravity, Claude y Cursor",
                "Dominio profesional del inglés"
            ],
            why: "Definirás la capa de inteligencia que coordina la administración empresarial autónoma y la gestión de capital on-chain."
        }
    },
    {
        id: 'backend_mlops',
        department: 'ai',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Backend & MLOps Engineer",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will scale backend services hosting our AI infrastructure, build secure APIs, manage container deployment, and orchestrate model inference pipelines with high speed and low latency.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Build scalable backend APIs in Python or Rust to serve AI agent commands",
                "Configure MLOps infrastructure for model hosting, monitoring, and versioning",
                "Ensure high availability and low latency of model inference endpoints",
                "Implement containerization and deployment pipelines using Docker and Kubernetes"
            ],
            requirements: [
                "3+ years in software engineering with a focus on backend infrastructure and MLOps",
                "Experience with ML deployment tools (Triton, vLLM) and CI/CD pipelines",
                "Bilingual fluency in English and Spanish",
                "Familiarity with Claude, Cursor, and Antigravity APIs"
            ],
            why: "You will keep the 'brain' of the ecosystem alive, fast, and connected securely to our transaction networks."
        },
        es: {
            title: "Backend & MLOps Engineer",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Escalarás servicios backend que alojan nuestra infraestructura de IA, construirás APIs seguras, gestionarás despliegues en contenedores y orquestarás pipelines de inferencia de modelos con velocidad y baja latencia.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Construir APIs backend escalables en Python o Rust para servir comandos de agentes de IA",
                "Configurar infraestructura MLOps para el alojamiento, monitoreo y versionamiento de modelos",
                "Garantizar alta disponibilidad y baja latencia de los endpoints de inferencia del modelo",
                "Implementar pipelines de contenedorización y despliegue usando Docker y Kubernetes"
            ],
            requirements: [
                "3+ años en ingeniería de software enfocado en infraestructura backend y MLOps",
                "Experiencia con herramientas de despliegue de ML (Triton, vLLM) y pipelines de CI/CD",
                "Fluidez bilingüe en inglés y español",
                "Familiaridad con las APIs de Claude, Cursor y Antigravity"
            ],
            why: "Mantendrás el 'cerebro' del ecosistema activo, rápido y conectado de forma segura a nuestras redes transaccionales."
        }
    },
    {
        id: 'senior_fullstack_payments',
        department: 'product',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Senior Full-Stack Developer (Payments)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will own the payment infrastructure for Luxor Pay. Your focus will be transaction stability, split fees, webhooks, and preventing network drops (like 403 errors). You will write clean, robust code across both frontend and backend layers.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Implement secure payment flows using Stripe, traditional rails, and Solana Pay",
                "Design resilient webhook systems and retry queues for transaction finalization",
                "Monitor and debug payment API response times, errors, and system security",
                "Maintain and build payment dashboard interfaces using modern web technologies"
            ],
            requirements: [
                "4+ years building fintech or payment products in production",
                "Experience with database consistency, lock management, and distributed systems",
                "Bilingual fluency in English and Spanish",
                "Strong willingness to learn and adapt to tools like Cursor, Claude, and Antigravity"
            ],
            why: "You will build the gateway that lets traditional businesses receive stablecoin values seamlessly."
        },
        es: {
            title: "Senior Full-Stack Developer (Pagos)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Liderarás la infraestructura de pagos para Luxor Pay. Tu enfoque será la estabilidad de transacciones, comisiones divididas, webhooks y previniendo caídas de red (errores 403). Escribirás código limpio y robusto en frontend y backend.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Implementar flujos de pago seguros usando Stripe, pasarelas tradicionales y Solana Pay",
                "Diseñar sistemas de webhooks resilientes y colas de reintento para la finalización de transacciones",
                "Monitorear y depurar tiempos de respuesta, errores y seguridad de APIs de pago",
                "Mantener y construir interfaces de panel de pagos usando tecnologías web modernas"
            ],
            requirements: [
                "4+ años construyendo productos fintech o de pago en producción",
                "Experiencia con consistencia de bases de datos, gestión de bloqueos y sistemas distribuidos",
                "Fluidez bilingüe en inglés y español",
                "Fuerte disposición para aprender y adaptarse a herramientas como Cursor, Claude y Antigravity"
            ],
            why: "Construirás la pasarela que permite a comercios tradicionales recibir valores en stablecoins de forma sencilla."
        }
    },
    {
        id: 'mobile_wallet',
        department: 'product',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Mobile / Wallet Developer",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will build the mobile wallet application for our Royalty Decentralized Institution. You will handle secure local key management, biometric authentication, and transaction signatures on Solana.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Build fluid mobile interfaces for non-custodial wallet administration",
                "Implement local cryptographic key generation, secure storage, and transaction signing",
                "Optimize state management and mobile build pipelines for iOS and Android",
                "Integrate smart contracts and local storage encryption mechanisms"
            ],
            requirements: [
                "3+ years of mobile app development (React Native or Flutter) with published apps",
                "Knowledge of mobile security best practices, keychain APIs, and BIP39 standard",
                "Bilingual fluency in English and Spanish",
                "Experience working in fast-paced Web3 environments using Claude/Cursor"
            ],
            why: "You will place the power of the Luxor economy directly in the pockets of thousands of users."
        },
        es: {
            title: "Mobile / Wallet Developer",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Construirás la aplicación móvil de la wallet para Royalty Decentralized Institution. Manejarás la administración segura de claves locales, autenticación biométrica y firmas de transacciones en Solana.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Construir interfaces móviles fluidas para la administración de wallets non-custodial",
                "Implementar generación de claves criptográficas locales, almacenamiento seguro y firmas",
                "Optimizar la gestión de estado y los pipelines de compilación para iOS y Android",
                "Integrar contratos inteligentes y mecanismos de cifrado de almacenamiento local"
            ],
            requirements: [
                "3+ años de desarrollo móvil (React Native o Flutter) con aplicaciones publicadas",
                "Conocimiento de buenas prácticas de seguridad móvil, APIs de almacenamiento seguro y estándares BIP39",
                "Fluidez bilingüe en inglés y español",
                "Experiencia trabajando en entornos Web3 rápidos utilizando Claude/Cursor"
            ],
            why: "Pondrás el poder de la economía Luxor directamente en los bolsillos de miles de usuarios."
        }
    },
    {
        id: 'frontend_uiux_web3',
        department: 'product',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Frontend UI/UX Developer (Web3)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "Frictionless UX is the difference between crypto hobbyists and global commercial adoption. You will bridge visual design and React code. You will build highly interactive, beautiful, and accessible web frontends that make on-chain interactions feel simple.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Implement pixel-perfect designs with Tailwind CSS, Next.js, and framer-motion animations",
                "Connect client-side interfaces to Web3 actions and state changes",
                "Conduct user testing and implement continuous UI/UX micro-optimizations",
                "Ensure responsive layouts across mobile, tablet, and desktop viewports"
            ],
            requirements: [
                "3+ years writing responsive React/Next.js frontends in production environments",
                "Strong design sensibility and mastery of modern CSS animations",
                "Bilingual fluency in English and Spanish",
                "Familiarity with Google Antigravity and Claude/Cursor tools"
            ],
            why: "You will build the beautiful, premium interfaces that make our complex financial tech feel clean and natural."
        },
        es: {
            title: "Frontend UI/UX Developer (Web3)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "La UX sin fricciones es la diferencia entre los entusiastas de crypto y la adopción comercial global. Unirás el diseño visual y el código en React. Construirás frontends web altamente interactivos, hermosos y accesibles que simplifiquen las interacciones on-chain.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Implementar diseños pixel-perfect con Tailwind CSS, Next.js y animaciones en framer-motion",
                "Conectar interfaces de cliente a acciones Web3 y cambios de estado",
                "Realizar pruebas de usuario e implementar micro-optimizaciones continuas de UI/UX",
                "Garantizar diseños responsivos en resoluciones móviles, tablets y desktops"
            ],
            requirements: [
                "3+ años escribiendo frontends interactivos en React/Next.js en entornos productivos",
                "Fuerte sensibilidad de diseño y dominio de animaciones CSS modernas",
                "Fluidez bilingüe en inglés y español",
                "Familiaridad con las herramientas Google Antigravity y Claude/Cursor"
            ],
            why: "Construirás las interfaces hermosas y premium que hacen que nuestra tecnología financiera se sientan limpia y natural."
        }
    },
    {
        id: 'cmo_crypto_marketing',
        department: 'marketing',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Chief Marketing Officer (CMO)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will define our marketing strategy, coordinate pre-sale phases, and direct token launch communications. You will align brand positioning across both institutional and community channels, linking AI, Web3, and RWA narrative pillars.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Direct the global marketing strategy and public relations campaigns",
                "Structure and execute token pre-sale marketing campaigns and ecosystem initiatives",
                "Establish KPI metrics for community growth and paid acquisition performance",
                "Manage and allocate budget across multiple media channels and platforms"
            ],
            requirements: [
                "5+ years leading marketing in crypto, fintech, or high-growth tech startups",
                "Familiarity with X (Twitter) Ads, Google Ads, Meta Business Suite, and Telegram Ads",
                "Bilingual fluency in English and Spanish",
                "Deep understanding of token economics and Web3 community culture"
            ],
            why: "You will craft the GTM playbook that drives token liquidity and global ecosystem trust."
        },
        es: {
            title: "Chief Marketing Officer (CMO)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Definirás nuestra estrategia de marketing, coordinarás fases de preventa y dirigirás las comunicaciones del lanzamiento del token. Alinearás el posicionamiento de marca en canales institucionales y comunitarios, enlazando los pilares de IA, Web3 y RWA.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Dirigir la estrategia de marketing global y campañas de relaciones públicas",
                "Estructurar y ejecutar campañas de marketing para la preventa del token e iniciativas del ecosistema",
                "Establecer métricas de KPI para el crecimiento de la comunidad y el rendimiento de adquisición",
                "Gestionar y asignar el presupuesto en múltiples canales de medios y plataformas"
            ],
            requirements: [
                "5+ años liderando marketing en startups de criptomonedas, fintech o de rápido crecimiento",
                "Familiaridad con X (Twitter) Ads, Google Ads, Meta Business Suite y Telegram Ads",
                "Fluidez bilingüe en inglés y español",
                "Comprensión profunda de economía de tokens y cultura comunitaria Web3"
            ],
            why: "Diseñarás la estrategia GTM que impulsará la liquidez del token y la confianza en nuestro ecosistema."
        }
    },
    {
        id: 'creative_director_audiovisual',
        department: 'marketing',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'spanish',
        en: {
            title: "Creative Director / Audiovisual Producer",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will produce high-end video content, 3D renders of our smart glasses and hardware, and cinematic trailers explaining the technical ecosystem. You will ensure visual quality remains premium and state-of-the-art.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Own the visual narrative and produce high-quality video content from concept to final cut",
                "Collaborate with designers to produce 3D hardware renders and animations",
                "Direct and shoot video material for social campaigns and brand presentations",
                "Keep visual consistency across all video assets, channels, and event promotions"
            ],
            requirements: [
                "3+ years as a creative director or video producer in modern tech or agency setups",
                "Expertise in Adobe Premiere, After Effects, and 3D modeling tools (Blender, Cinema 4D)",
                "Willingness to learn and utilize tools like Google Antigravity and Claude",
                "Spanish fluency with working English knowledge"
            ],
            why: "You will visually define the premium, state-of-the-art aesthetic that sets Luxor apart from generic projects."
        },
        es: {
            title: "Director Creativo / Productor Audiovisual",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Producirás contenido de video de alta gama, renders 3D de nuestro hardware y gafas, y trailers cinematográficos que expliquen el ecosistema técnico. Garantizarás que la calidad visual sea premium y de última generación.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Liderar la narrativa visual y producir contenido de video de alta calidad desde el concepto hasta el corte final",
                "Colaborar con diseñadores para producir renders 3D de hardware y animaciones",
                "Dirigir y filmar material de video para campañas en redes sociales y presentaciones de marca",
                "Mantener la consistencia visual en todos los recursos de video, canales y promociones de eventos"
            ],
            requirements: [
                "3+ años como director creativo o productor de video en tecnología moderna o agencias",
                "Dominio de Adobe Premiere, After Effects y herramientas de modelado 3D (Blender, Cinema 4D)",
                "Disposición para aprender y utilizar herramientas como Google Antigravity y Claude",
                "Fluidez en español con conocimiento de trabajo en inglés"
            ],
            why: "Definirás visualmente la estética premium que distingue a Luxor de los proyectos genéricos."
        }
    },
    {
        id: 'graphic_motion_designer',
        department: 'marketing',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'spanish',
        en: {
            title: "Graphic & Motion Designer (Web3)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will design social media assets, high-level memes, product infographics, and motion graphics for marketing campaigns and interface micro-animations. Your graphics will define our daily brand aesthetic.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Create engaging graphic designs for X (Twitter), Telegram, and Web interfaces",
                "Develop motion graphic ads and video snippets to explain protocol metrics",
                "Collaborate with the creative director to enforce a unified brand aesthetic",
                "Deliver daily visual materials and templates for community spaces"
            ],
            requirements: [
                "3+ years of graphic design experience with a strong portfolio in tech, gaming, or crypto",
                "Expertise in Figma, Photoshop, Illustrator, and After Effects",
                "Knowledge of social media design best practices (X, Instagram, TikTok)",
                "Spanish fluency with working English knowledge"
            ],
            why: "You will produce the visual assets that represent the daily pulse and style of our ecosystem."
        },
        es: {
            title: "Diseñador Gráfico & Motion Designer (Web3)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Diseñarás recursos para redes sociales, memes de alto nivel, infografías de producto y gráficos en movimiento para campañas publicitarias y micro-animaciones de interfaz. Tus gráficos definirán la estética de la marca.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Crear diseños gráficos activos para X (Twitter), Telegram e interfaces web",
                "Desarrollar anuncios en motion graphics y fragmentos de video explicativos",
                "Colaborar con el director creativo para mantener una estética de marca unificada",
                "Entregar materiales visuales diarios y plantillas para espacios comunitarios"
            ],
            requirements: [
                "3+ años de experiencia en diseño gráfico con un portafolio sólido en tecnología, gaming o cripto",
                "Dominio de Figma, Photoshop, Illustrator y After Effects",
                "Conocimiento de buenas prácticas de diseño para redes (X, Instagram, TikTok)",
                "Fluidez en español con conocimiento de trabajo en inglés"
            ],
            why: "Producirás los recursos visuales que representen el pulso diario y el estilo de nuestro ecosistema."
        }
    },
    {
        id: 'community_manager_collabs',
        department: 'marketing',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Community Manager & Collabs Lead",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will manage our online communities (Discord / X / Telegram), coordinate AMAs, organize community spaces, and reach out to other Web3 projects for cross-promotional collaborations. You will build and keep the community active and engaged.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Moderate and grow our Discord and Telegram communities, keeping engagement high",
                "Host weekly AMAs, spaces, and interactive events for LXR holders",
                "Reach out and close collaborative campaigns with other Solana projects",
                "Gather feedback from users and report community sentiment to the product team"
            ],
            requirements: [
                "2+ years managing communities inside crypto, gaming, or fintech",
                "Familiarity with Discord, X (Twitter), Telegram, and community moderation bots",
                "Bilingual fluency in English and Spanish",
                "Deep familiarity with Solana culture and ecosystem dynamics"
            ],
            why: "You will build the community foundation that drives organic loyalty and word-of-mouth growth."
        },
        es: {
            title: "Community Manager & Collabs Lead",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Gestionarás nuestras comunidades en línea (Discord / X / Telegram), coordinarás AMAs, organizarás espacios comunitarios y contactarás a otros proyectos Web3 para alianzas promocionales cruzadas. Mantendrás la comunidad activa y participativa.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Moderar y hacer crecer nuestras comunidades de Discord y Telegram, manteniendo un alto nivel de participación",
                "Organizar AMAs semanales, spaces y eventos interactivos para holders de LXR",
                "Contactar y cerrar campañas colaborativas con otros proyectos de Solana",
                "Recopilar comentarios de los usuarios e informar sobre el sentimiento de la comunidad al equipo de producto"
            ],
            requirements: [
                "2+ años gestionando comunidades en cripto, gaming o fintech",
                "Familiaridad con Discord, X (Twitter), Telegram y bots de moderación comunitaria",
                "Fluidez bilingüe en inglés y español",
                "Familiaridad profunda con la cultura y dinámicas de Solana"
            ],
            why: "Construirás la base de la comunidad que impulsará la lealtad orgánica y el crecimiento boca a boca."
        }
    },
    {
        id: 'growth_hacker',
        department: 'marketing',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Growth Hacker / Paid Media Specialist",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will design, execute, and optimize paid traffic campaigns, scale our organic search presence (SEO), and construct guerrilla marketing loops to onboard users to our payment gateway and token economy.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Design and run paid advertising campaigns across Twitter Ads, Google Ads, Meta Business Suite, TikTok Ads, and Telegram Ads",
                "Optimize on-page and off-page SEO for product keywords",
                "Build product-led growth loops and referral programs that scale organically",
                "Analyze acquisition funnels and implement growth experiments to improve conversion"
            ],
            requirements: [
                "3+ years managing growth marketing or paid ads in crypto or tech sectors",
                "Expertise with ad managers, pixels, tracking, and web analytics (Google Analytics)",
                "Bilingual fluency in English and Spanish",
                "Ability to write creative ad copy and design growth test sheets using Claude/Cursor"
            ],
            why: "You will build the engine that drives scalable traffic and users directly to our live products."
        },
        es: {
            title: "Growth Hacker / Paid Media Specialist",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Diseñarás, ejecutarás y optimizarás campañas de tráfico pagado, escalarás nuestro posicionamiento SEO y construirás loops de guerrilla para sumar usuarios a nuestra pasarela de pagos y a la economía del token.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Diseñar y ejecutar campañas de publicidad pagada en Twitter Ads, Google Ads, Meta Business Suite, TikTok Ads y Telegram Ads",
                "Optimizar SEO on-page y off-page para palabras clave de producto",
                "Construir loops de crecimiento impulsados por el producto y programas de referidos",
                "Analizar embudos de adquisición e implementar experimentos de crecimiento para mejorar conversiones"
            ],
            requirements: [
                "3+ años gestionando growth marketing o pauta digital en sectores cripto o tecnológicos",
                "Experiencia con administradores de anuncios, píxeles, tracking y analítica web (Google Analytics)",
                "Fluidez bilingüe en inglés y español",
                "Capacidad para escribir textos publicitarios creativos y diseñar flujos de prueba usando Claude/Cursor"
            ],
            why: "Construirás el motor que dirigirá tráfico y usuarios escalables directamente a nuestros productos en vivo."
        }
    },
    {
        id: 'legal_counsel',
        department: 'operations',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'english',
        en: {
            title: "Legal Counsel (RWA & DAOs Specialist)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will serve as our principal legal counsel. You will design the legal wrappers for our RWA properties, manage DAO legal structures, and ensure compliance for LXR, XLS, and stablecoin deployments across global jurisdictions.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Draft and review legal agreements for real-world asset (RWA) tokenization",
                "Manage corporate registration, compliance structures, and legal definitions of the DAO in Utah and internationally",
                "Advise executive leadership on regulatory frameworks (SEC, state laws, etc.)",
                "Assess compliance parameters for payment gateway integrations and stablecoin reserves"
            ],
            requirements: [
                "Juris Doctor (JD) degree and active license to practice law in the United States",
                "2+ years specializing in Web3 legal counsel, tokenized assets, or securities regulation",
                "Deep understanding of real estate structures and corporate law",
                "Fluent English speaker"
            ],
            why: "You will build the legal foundation that allows real estate properties to be securely represented on Solana."
        },
        es: {
            title: "Legal Counsel (Especialista en RWA y DAOs)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Serás nuestro asesor legal principal. Diseñarás las estructuras legales para nuestros activos RWA, gestionarás el marco legal de la DAO en Utah e internacionalmente, y garantizarás el cumplimiento de LXR, XLS y stablecoins.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Redactar y revisar acuerdos legales para la tokenización de activos del mundo real (RWA)",
                "Gestionar el registro corporativo, estructuras de cumplimiento y definiciones legales de la DAO",
                "Asesorar al liderazgo ejecutivo sobre marcos regulatorios (SEC, leyes estatales, etc.)",
                "Evaluar parámetros de cumplimiento para integraciones de pasarelas de pago y reservas de stablecoins"
            ],
            requirements: [
                "Título de Juris Doctor (JD) y licencia activa para ejercer la abogacía en los Estados Unidos",
                "2+ años de especialización en asesoría legal Web3, activos tokenizados o regulación de valores",
                "Comprensión profunda de estructuras inmobiliarias y derecho corporativo",
                "Dominio profesional del inglés"
            ],
            why: "Construirás el marco legal que permitirá representar de forma segura propiedades inmobiliarias en Solana."
        }
    },
    {
        id: 'cfo_web3',
        department: 'operations',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Chief Financial Officer (CFO) / Web3 Finance Director",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will act as our financial strategist, managing our global budget, revenue projections for Luxor Pay, stablecoin arbitrage models, risk management, and the macroeconomics of our tokens.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Direct the macro-financial strategy and asset-liability management of USDX reserves",
                "Model cash flows and revenue projections for our B2B payment gateway and RWA platform",
                "Ensure robust hedging and risk management strategies against digital asset volatility"
            ],
            requirements: [
                "5+ years of experience in corporate finance or investment banking, with 2+ years in Web3/DeFi",
                "Strong understanding of stablecoin mechanics, liquidity pools, and treasury operations",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will direct the financial vision of a pioneering cross-border network connecting North and South America."
        },
        es: {
            title: "Chief Financial Officer (CFO) / Director Financiero Web3",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Actuarás como nuestro estratega financiero, gestionando el presupuesto global, las proyecciones de ingresos de Luxor Pay, los modelos de arbitraje de stablecoins, la gestión de riesgos y la macroeconomía de nuestros tokens.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Dirigir la estrategia macrofinanciera y la gestión de activos y pasivos de las reservas de USDX",
                "Modelar flujos de caja y proyecciones de ingresos para nuestra pasarela de pagos B2B y RWA",
                "Garantizar estrategias robustas de cobertura y gestión de riesgos contra la volatilidad de criptoactivos"
            ],
            requirements: [
                "5+ años de experiencia en finanzas corporativas o banca de inversión, con 2+ años en Web3/DeFi",
                "Comprensión sólida de la mecánica de stablecoins, pools de liquidez y operaciones de tesorería",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Dirigirás la visión financiera de una red transfronteriza pionera que conecta Norte y Sudamérica."
        }
    },
    {
        id: 'crypto_treasury_manager',
        department: 'operations',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Crypto Treasury Manager",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will directly custody and manage project funds. You will coordinate multi-signature wallets (Squads on Solana), program international payroll, execute token vesting schedules, and secure stablecoin backing reserves.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Manage multisig wallet operations and authorize global token transfers",
                "Program and execute payroll operations for our global remote team",
                "Verify and monitor on-chain reserve backing levels for USDX stablecoins"
            ],
            requirements: [
                "3+ years managing corporate or crypto treasury operations",
                "Expertise with Solana multi-sig platforms like Squads, and streamflow for vesting",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will own the operational execution of capital movements for a high-volume decentralized treasury."
        },
        es: {
            title: "Crypto Treasury Manager (Gestor de Tesorería)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Custodiarás y gestionarás directamente los fondos del proyecto. Coordinarás billeteras multifirma (como Squads en Solana), programarás el pago de nómina internacional, ejecutarás vestings de tokens y asegurarás las reservas de respaldo.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Gestionar operaciones de billeteras multisig y autorizar transferencias globales de tokens",
                "Programar y ejecutar operaciones de nómina para nuestro equipo remoto global",
                "Verificar y monitorear los niveles de respaldo de reserva en cadena para las stablecoins USDX"
            ],
            requirements: [
                "3+ años gestionando operaciones de tesorería corporativa o criptográfica",
                "Experiencia con plataformas multisig de Solana como Squads y Streamflow para vesting",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Serás dueño de la ejecución operativa de los movimientos de capital para una tesorería descentralizada de gran volumen."
        }
    },
    {
        id: 'international_accountant',
        department: 'operations',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "International Corporate Accountant (Crypto Specialist)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will reconcile traditional banking statements with blockchain transactions, consolidate international entity balances, and prepare tax returns for a cross-border organization operating in fiat and crypto.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Consolidate balance sheets and accounts across multiple corporate jurisdictions",
                "Reconcile bank statements with on-chain transaction hashes and smart contract logs",
                "Prepare financial reports and tax filings compliant with international regulations"
            ],
            requirements: [
                "3+ years of professional accounting experience, with exposure to crypto tax and reconciliation tools",
                "Certified Public Accountant (CPA) or equivalent international qualification",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will master the financial ledger of a dual fiat-crypto economy spanning multiple countries."
        },
        es: {
            title: "Contador Corporativo Internacional (Especialista en Cripto)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Conciliarás estados de cuenta bancarios tradicionales con transacciones en blockchain, consolidarás los balances de entidades internacionales y prepararás cierres fiscales para una organización transfronteriza.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Consolidar balances generales y cuentas en múltiples jurisdicciones corporativas",
                "Conciliar extractos bancarios con hashes de transacciones on-chain y registros de smart contracts",
                "Preparar informes financieros y declaraciones de impuestos conforme a las normativas internacionales"
            ],
            requirements: [
                "3+ años de experiencia contable profesional, con exposición a herramientas de impuestos y conciliación cripto",
                "Contador Público Autorizado (CPA) o certificación internacional equivalente",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Dominarás el registro contable de una economía dual fiat-cripto que se extiende por varios países."
        }
    },
    {
        id: 'coo_operations',
        department: 'operations',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Chief Operating Officer (COO)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will translate strategic vision into daily operational execution, coordinating development, marketing, and legal teams to align schedules and eliminate organizational bottlenecks.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Coordinate cross-functional workflows between technical, marketing, and operational teams",
                "Establish and monitor organizational key performance indicators (KPIs)",
                "Optimize operational cost structures and international vendor partnerships"
            ],
            requirements: [
                "5+ years of operational leadership experience in high-growth technology startups",
                "Strong execution track record and mastery of operations management tools",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will serve as the engine keeping our continental network of talent and assets running perfectly."
        },
        es: {
            title: "Chief Operating Officer (COO) / Director de Operaciones",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Traducirás la visión estratégica en ejecución operativa diaria, coordinando a los equipos de desarrollo, marketing y legal para alinear plazos y eliminar cuellos de botella.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Coordinar flujos de trabajo interfuncionales entre los equipos técnico, de marketing y operativo",
                "Establecer y monitorear indicadores clave de rendimiento (KPI) organizacionales",
                "Optimizar las estructuras de costos operativos y las alianzas con proveedores internacionales"
            ],
            requirements: [
                "5+ años de experiencia en liderazgo operativo en startups tecnológicas de rápido crecimiento",
                "Sólida trayectoria de ejecución y dominio de herramientas de gestión de operaciones",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Servirás como el motor que mantiene en perfecto funcionamiento nuestra red continental de talento y activos."
        }
    },
    {
        id: 'project_manager_web3',
        department: 'operations',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Project Manager / Scrum Master (Web3)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will bridge engineering and product design, managing weekly sprints, documenting workflows in Notion, ClickUp, or Jira, and ensuring prompt delivery of our wallet and gateway systems.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Facilitate daily standups, sprint planning, and retrospective sessions",
                "Maintain project documentation and track task completions in Notion and ClickUp",
                "Identify and resolve project blockers to protect engineering momentum"
            ],
            requirements: [
                "3+ years managing software development projects, ideally within Web3 or fintech",
                "Experience with Agile/Scrum methodologies and project tracking software",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will coordinate the release of our flagship decentralized systems to global markets."
        },
        es: {
            title: "Project Manager / Scrum Master (Web3)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Unirás al equipo de ingeniería con el diseño de producto, gestionando sprints semanales, documentando flujos en Notion, ClickUp o Jira, y garantizando la entrega de nuestra wallet y pasarela.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Facilitar reuniones diarias (standups), planeación de sprints y sesiones retrospectivas",
                "Mantener la documentación del proyecto y rastrear tareas en Notion y ClickUp",
                "Identificar y resolver bloqueos del proyecto para proteger el ritmo de ingeniería"
            ],
            requirements: [
                "3+ años gestionando proyectos de desarrollo de software, idealmente en Web3 o fintech",
                "Experiencia con metodologías Agile/Scrum y software de seguimiento de proyectos",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Coordinarás el lanzamiento de nuestros sistemas descentralizados insignia en los mercados globales."
        }
    },
    {
        id: 'crypto_recruiter',
        department: 'operations',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Crypto Recruiter / Head of Talent",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will source and recruit top engineering, AI, and marketing talent globally. You will map talent pools in Rust, AI models, and Web3 GTM to build a world-class team.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Manage the end-to-end recruitment lifecycle for technical and non-technical roles",
                "Build pipelines of active and passive Rust, Solana, and AI specialists",
                "Coordinate interview loops and structure competitive compensation packages"
            ],
            requirements: [
                "2+ years of recruiting experience in crypto, Web3, or advanced AI industries",
                "Familiarity with sourcing tools and communities (GitHub, X, Discord, LinkedIn)",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will directly shape the talent structure and capability of the team building Luxor."
        },
        es: {
            title: "Crypto Recruiter / Head of Talent",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Buscarás y reclutarás al mejor talento en ingeniería, IA y marketing a nivel global. Diseñarás pipelines de talento en Rust, modelos de IA y Web3 GTM para construir un equipo de clase mundial.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Gestionar el ciclo completo de reclutamiento para roles técnicos y no técnicos",
                "Construir pipelines de especialistas activos y pasivos en Rust, Solana e IA",
                "Coordinar ciclos de entrevistas y estructurar paquetes de compensación competitivos"
            ],
            requirements: [
                "2+ años de experiencia en reclutamiento en cripto, Web3 o industrias de IA avanzada",
                "Familiaridad con herramientas de búsqueda y comunidades (GitHub, X, Discord, LinkedIn)",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Darás forma directa a la estructura de talento y capacidades del equipo que construye Luxor."
        }
    },
    {
        id: 'hr_operations',
        department: 'operations',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "HR Operations / People Operations",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will manage international contracting, onboard new employees, structure remote benefits, and foster team culture across our global remote team.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Coordinate onboarding processes and welcome procedures for new hires",
                "Manage global contractor agreements and compliance via platforms like Deel",
                "Develop initiatives to strengthen corporate culture and team cohesion"
            ],
            requirements: [
                "3+ years in human resources or people operations, ideally in remote companies",
                "Familiarity with international contractor compliance and payment platforms",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will cultivate a supportive, highly motivated remote workspace spanning multiple countries."
        },
        es: {
            title: "HR Operations / People Operations",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Gestionarás la contratación internacional, el onboarding de nuevos empleados, estructurarás beneficios remotos y fomentarás la cultura interna en nuestro equipo global.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Coordinar los procesos de inducción (onboarding) y bienvenida de nuevos colaboradores",
                "Gestionar contratos internacionales de contratistas y cumplimiento a través de plataformas como Deel",
                "Desarrollar iniciativas para fortalecer la cultura corporativa y la cohesión del equipo"
            ],
            requirements: [
                "3+ años en recursos humanos u operaciones de personal, idealmente en empresas remotas",
                "Familiaridad con plataformas de cumplimiento de contratistas y pagos internacionales",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Cultivarás un espacio de trabajo remoto de apoyo y altamente motivado que se extiende por múltiples países."
        }
    },
    {
        id: 'clo_legal',
        department: 'operations',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Chief Legal Officer (CLO) / Crypto Legal Director",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will serve as our principal legal strategist. You will design the legal frameworks for our 3 tokens, structure stablecoin reserve operations, and manage compliance across global regulatory environments.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Define the global regulatory strategy for LXR, XLS, and USDX tokens",
                "Structure terms, licenses, and legal interfaces for our fintech and RWA products",
                "Represent the company in regulatory inquiries and establish legal defense standards"
            ],
            requirements: [
                "Juris Doctor (JD) degree and active bar membership in the US",
                "5+ years of legal practice, with 3+ years specializing in Web3, securities, or fintech regulation",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will shield our innovative digital asset platforms with ironclad legal structures."
        },
        es: {
            title: "Chief Legal Officer (CLO) / Director Jurídico Cripto",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Servirás como nuestro principal estratega legal. Diseñarás los marcos legales para nuestros 3 tokens, estructurarás las operaciones de reserva de stablecoins y gestionarás el cumplimiento normativo internacional.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Definir la estrategia regulatoria global para los tokens LXR, XLS y USDX",
                "Estructurar términos, licencias e interfaces legales para nuestros productos fintech y RWA",
                "Representar a la empresa en consultas regulatorias y establecer estándares de cumplimiento legal"
            ],
            requirements: [
                "Título de Juris Doctor (JD) y membresía activa en el colegio de abogados de EE. UU.",
                "5+ años de práctica legal, con 3+ años especializándose en regulación Web3, valores o fintech",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Protegerás nuestras innovadoras plataformas de activos digitales con estructuras legales blindadas."
        }
    },
    {
        id: 'compliance_officer',
        department: 'operations',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Compliance Officer (KYC / AML Specialist)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will design and implement Know Your Customer (KYC) and Anti-Money Laundering (AML) processes for users purchasing our tokens in pre-sales or using our B2B payment gateway services.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Establish and audit KYC onboarding verification procedures",
                "Monitor transaction patterns and ensure compliance with AML directives",
                "Liaise with external KYC provider platforms and verify documentation accuracy"
            ],
            requirements: [
                "3+ years as a compliance officer or auditor in fintech, crypto exchange, or banking",
                "Familiarity with global KYC/AML software standards and reporting protocols",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will verify that our high-velocity capital movements comply with international financial regulations."
        },
        es: {
            title: "Director de Cumplimiento (Compliance Officer - KYC/AML)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Diseñarás e implementarás los procesos de verificación de identidad (KYC) y prevención de lavado de dinero (AML) para los usuarios de la preventa y de nuestra pasarela de pagos B2B.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Establecer y auditar los procedimientos de verificación e incorporación (onboarding) de KYC",
                "Monitorear patrones de transacciones y garantizar el cumplimiento de las directivas AML",
                "Coordinar con plataformas externas de KYC y verificar la exactitud de la documentación"
            ],
            requirements: [
                "3+ años como oficial de cumplimiento o auditor en fintech, exchanges cripto o banca",
                "Familiaridad con los estándares de software KYC/AML globales y protocolos de reporte",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Garantizarás que nuestros movimientos de capital de alta velocidad cumplan con las regulaciones internacionales."
        }
    },
    {
        id: 'dao_governance_architect',
        department: 'operations',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "DAO Governance Architect / Manager",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will structure how token holders participate in DAO voting, draft governance proposals, and ensure community decisions align with on-chain execution and treasury parameters.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Draft formal governance proposals and manage token-weighted voting structures",
                "Coordinate community discussions regarding protocol parameter adjustments",
                "Audit voting execution and interface with multisig executors to implement ratified choices"
            ],
            requirements: [
                "2+ years experience in DAO structure, decentralized governance, or community management",
                "Familiarity with snapshot voting, SPL governance, or on-chain voting programs",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will manage the democratic engine that drives decentralization for a multi-million dollar protocol."
        },
        es: {
            title: "DAO Governance Architect / Manager",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Estructurarás cómo participan los poseedores de tokens en las votaciones de la DAO, redactarás propuestas de gobernanza y garantizarás que las decisiones comunitarias coincidan con los parámetros en cadena.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Redactar propuestas de gobernanza formales y gestionar estructuras de votación con tokens",
                "Coordinar discusiones comunitarias sobre los ajustes de los parámetros del protocolo",
                "Auditar la ejecución de votaciones y coordinar con los ejecutores multisig para implementar cambios"
            ],
            requirements: [
                "2+ años de experiencia en estructuración de DAOs, gobernanza descentralizada o gestión comunitaria",
                "Familiaridad con votaciones en Snapshot, SPL governance o programas de votación on-chain",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Gestionarás el motor democrático que impulsa la descentralización para un protocolo multimillonario."
        }
    },
    {
        id: 'head_bd',
        department: 'operations',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'remote',
        language: 'bilingual',
        en: {
            title: "Head of Business Development (BD)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will acquire corporate and institutional clients, looking for merchants to integrate Luxor Pay, companies to integrate with Roosevelt AI, and funds interested in RWA tokenization.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Lead outbound outreach and close partnerships with corporate merchants for Luxor Pay",
                "Establish commercial relationships with technology partners for Roosevelt AI integrations",
                "Source institutional investors and asset managers for RWA tokenization opportunities"
            ],
            requirements: [
                "3+ years experience in sales, business development, or strategic alliances in fintech or crypto",
                "Strong existing network among technology operators, merchant corporations, and fund managers",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will build the commercial rails that drive institutional volume into our payment gateway."
        },
        es: {
            title: "Head of Business Development (BD)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Adquirirás clientes corporativos e institucionales, buscando comercios que quieran integrar Luxor Pay, empresas que se conecten con Roosevelt AI, y fondos interesados en la tokenización RWA.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Liderar la prospección saliente y cerrar alianzas con comercios corporativos para Luxor Pay",
                "Establecer relaciones comerciales con socios tecnológicos para integraciones de Roosevelt AI",
                "Identificar inversionistas institucionales y gestores de fondos para oportunidades RWA"
            ],
            requirements: [
                "3+ años de experiencia en ventas, desarrollo de negocios o alianzas en fintech o cripto",
                "Sólida red de contactos con operadores tecnológicos, corporaciones de comercios y gestores de fondos",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Construirás los rieles comerciales que impulsarán el volumen institucional hacia nuestra pasarela."
        }
    },
    {
        id: 'chief_of_staff',
        department: 'ceo_staff',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'onsite',
        language: 'bilingual',
        en: {
            title: "Chief of Staff / Personal Brand Director",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will act as the strategic mind behind the CEO's personal brand and schedule. You will coordinate the content team, oversee public appearances, secure media features, and protect the CEO's reputation.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Oversee and manage the CEO's public narrative, social media, and PR campaigns",
                "Direct the video production and editing workflows of the CEO's content team",
                "Identify and secure high-profile podcast features, speaking engagements, and public summits"
            ],
            requirements: [
                "3+ years in PR, brand management, or chief of staff roles at high-profile firms",
                "Exceptional communication skills and brand narrative planning",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will directly drive the public narrative and influence of the founder of a global financial movement."
        },
        es: {
            title: "Chief of Staff / Director de Marca Personal",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Actuarás como la mente estratégica detrás de la marca personal y la agenda del CEO. Coordinarás al equipo de contenido, supervisarás las apariciones públicas, conseguirás espacios en medios y cuidarás la reputación del CEO.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Supervisar y gestionar la narrativa pública del CEO, sus redes sociales y campañas de relaciones públicas",
                "Dirigir la producción de video y flujos de trabajo de edición del equipo de contenido del CEO",
                "Identificar y asegurar participaciones en podcasts de alto perfil, conferencias y cumbres públicas"
            ],
            requirements: [
                "3+ años en relaciones públicas, gestión de marca o roles de jefe de gabinete",
                "Habilidades excepcionales de comunicación y planificación de narrativa de marca",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Impulsarás directamente la narrativa pública y la influencia del fundador de un movimiento financiero global."
        }
    },
    {
        id: 'personal_filmmaker',
        department: 'ceo_staff',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'onsite',
        language: 'bilingual',
        en: {
            title: "Personal Filmmaker / Videographer",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will document the CEO's daily business operations, travel, key meetings, and events. You will capture behind-the-scenes content using top-tier video and audio equipment, serving as the CEO's content shadow.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Follow and record the CEO's daily operations, business travels, and public events",
                "Capture high-definition behind-the-scenes video and professional audio in real-time",
                "Maintain and organize media storage pipelines to feed raw footage to editor teams"
            ],
            requirements: [
                "Proven videography experience with a portfolio displaying documentary or dynamic short-form style",
                "Proficiency with modern video and audio equipment (iPhone setups, DSLR, stabilizer, lavalier mics)",
                "Bilingual capability and high adaptability for frequent travel"
            ],
            why: "You will travel the world capturing the moments that build a revolutionary corporate narrative."
        },
        es: {
            title: "Filmmaker / Videógrafo Personal ('Tu Sombra')",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Documentarás las operaciones diarias, viajes, reuniones clave y eventos del CEO. Capturarás contenido del 'detrás de escena' con equipos profesionales, siendo la sombra mediática del CEO.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Seguir y grabar las operaciones diarias, viajes de negocios y eventos públicos del CEO",
                "Capturar video de alta definición tras bambalinas y audio profesional en tiempo real",
                "Mantener y organizar flujos de almacenamiento de medios para enviar material crudo a los editores"
            ],
            requirements: [
                "Experiencia comprobada en videografía con portafolio que muestre estilo documental o de formato corto",
                "Dominio de equipos de video y audio modernos (setups de iPhone, DSLR, estabilizadores, micrófonos)",
                "Capacidad bilingüe y alta adaptabilidad para viajes frecuentes"
            ],
            why: "Viajarás por el mundo capturando los momentos que construyen una narrativa corporativa revolucionaria."
        }
    },
    {
        id: 'shortform_editor',
        department: 'ceo_staff',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'onsite',
        language: 'bilingual',
        en: {
            title: "Vertical Content Editor (Short-form)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will transform raw video footage into highly engaging shorts, reels, and TikToks. You will design psychological hooks, subtitles, and motion graphics to optimize audience retention.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Edit raw footage into viral, dynamic vertical videos (Shorts, Reels, TikTok)",
                "Create custom hooks, subtitles, sound design, and micro-animations to retain viewers",
                "A/B test different video edits and hooks based on audience retention statistics"
            ],
            requirements: [
                "Portfolio demonstrating high-retention short-form video edits with creative hooks",
                "Expertise in Adobe Premiere, After Effects, or CapCut",
                "Bilingual fluency in English and Spanish"
            ],
            why: "Your edits will directly influence the growth and viral reach of our continental fintech brand."
        },
        es: {
            title: "Editor de Contenido Vertical (Short-form)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Transformarás metraje crudo en shorts, reels y tiktoks altamente atractivos. Diseñarás ganchos psicológicos, subtítulos y gráficos en movimiento para optimizar la retención de la audiencia.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Editar material crudo en videos verticales dinámicos y virales (Shorts, Reels, TikTok)",
                "Crear ganchos personalizados, subtítulos, diseño de sonido y micro-animaciones",
                "Realizar pruebas A/B de diferentes ediciones y ganchos basados en estadísticas de retención"
            ],
            requirements: [
                "Portafolio que demuestre ediciones de formato corto de alta retención con ganchos creativos",
                "Dominio de Adobe Premiere, After Effects o CapCut",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Tus ediciones influirán directamente en el crecimiento y alcance viral de nuestra marca fintech."
        }
    },
    {
        id: 'pr_manager',
        department: 'ceo_staff',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'onsite',
        language: 'bilingual',
        en: {
            title: "PR Manager / Publicist",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will build media relationships to position the CEO in mainstream press, technology portals, and Web3 media. You will secure key speaking opportunities at global conferences.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Pitch stories and secure interviews for the CEO in tech, finance, and Web3 publications",
                "Write compelling press releases, opinion pieces, and media announcements",
                "Coordinate event logistics and media opportunities for the CEO at global summits"
            ],
            requirements: [
                "2+ years experience in public relations, media outreach, or brand publicity",
                "Strong existing network of tech, finance, and crypto journalists",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will build the public reputation and media reach of our executive brand across the globe."
        },
        es: {
            title: "Publicista / PR Manager (Relaciones Públicas)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Construirás relaciones con los medios para posicionar al CEO en prensa tradicional, portales de tecnología y medios Web3. Conseguirás conferencias clave en eventos globales.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Presentar historias y asegurar entrevistas para el CEO en publicaciones de tecnología, finanzas y Web3",
                "Redactar comunicados de prensa, artículos de opinión y anuncios de medios",
                "Coordinar la logística de eventos y oportunidades de prensa para el CEO en cumbres globales"
            ],
            requirements: [
                "2+ años de experiencia en relaciones públicas, difusión en medios o publicidad de marca",
                "Sólida red de contactos con periodistas de tecnología, finanzas y criptomonedas",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Construirás la reputación pública y el alcance mediático de nuestra marca ejecutiva a nivel global."
        }
    },
    {
        id: 'executive_assistant',
        department: 'ceo_staff',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'onsite',
        language: 'bilingual',
        en: {
            title: "High-Performance Executive Assistant (EA)",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will manage the CEO's calendar, filter communications, handle travel logistics, and coordinate agendas to eliminate friction and maximize operational focus.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Oversee and manage the CEO's daily schedule, filtering meetings and calls",
                "Coordinate complex international travel logistics (flights, hotels, transport, security)",
                "Act as a communication gatekeeper, handling critical emails and action items"
            ],
            requirements: [
                "3+ years as an executive assistant to founders, C-level executives, or high-profile figures",
                "High organization skills, detail-oriented, and capable of operating under pressure",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will be the guardian of the CEO's time, protecting the most valuable resource of our network."
        },
        es: {
            title: "Executive Assistant (EA) de Alto Rendimiento",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Gestionarás el calendario del CEO, filtrarás comunicaciones, manejarás la logística de viajes y coordinarás agendas para eliminar la fricción y maximizar el enfoque operativo.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Supervisar y gestionar la agenda diaria del CEO, filtrando reuniones y llamadas",
                "Coordinar la logística de viajes internacionales complejos (vuelos, hoteles, transporte, seguridad)",
                "Actuar como guardián de la comunicación, gestionando correos críticos y puntos de acción"
            ],
            requirements: [
                "3+ años como asistente ejecutiva de fundadores, ejecutivos C-level o figuras públicas",
                "Altas habilidades de organización, atención al detalle y capacidad para operar bajo presión",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Serás el guardián del tiempo del CEO, protegiendo el recurso más valioso de nuestra red."
        }
    },
    {
        id: 'private_chef',
        department: 'ceo_staff',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'onsite',
        language: 'bilingual',
        en: {
            title: "Private Performance Chef & Nutritionist",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will design, prepare, and manage the CEO's daily nutrition to optimize cognitive focus, energy, and overall health. You will travel occasionally or coordinate menus during business trips.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Plan and cook daily performance-focused meals tailored to the CEO's physical and cognitive goals",
                "Structure nutrition guidelines to sustain focus, constant energy, and recovery",
                "Manage kitchen logistics, ingredient sourcing, and menu coordination during travel"
            ],
            requirements: [
                "Professional culinary qualification with specialization in performance nutrition or biohacking diets",
                "Experience cooking for C-level executives, athletes, or private families",
                "Bilingual capability and willingness to adapt menus during travel"
            ],
            why: "You will optimize the biological energy and health of the leader driving our financial systems."
        },
        es: {
            title: "Chef Privado & Nutricionista de Rendimiento",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Diseñarás, prepararás y gestionarás la nutrición diaria del CEO para optimizar el enfoque cognitivo, la energía y la salud general. Viajarás ocasionalmente o coordinarás menús durante viajes.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Planificar y cocinar comidas diarias enfocadas en el rendimiento físico y cognitivo del CEO",
                "Estructurar pautas de nutrición para mantener el enfoque, energía constante y recuperación",
                "Gestionar la logística de cocina, compra de ingredientes y coordinación de menús durante viajes"
            ],
            requirements: [
                "Certificación culinaria profesional con especialización en nutrición deportiva o dietas de rendimiento",
                "Experiencia cocinando para ejecutivos C-level, atletas o familias privadas",
                "Capacidad bilingüe y disposición para adaptar menús durante viajes"
            ],
            why: "Optimizarás la energía biológica y la salud del líder que impulsa nuestros sistemas financieros."
        }
    },
    {
        id: 'performance_coach',
        department: 'ceo_staff',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'onsite',
        language: 'bilingual',
        en: {
            title: "Performance Coach / Personal Trainer",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will own the physical training, posture alignment, and recovery protocols for the CEO. You will design workouts, monitor sleep metrics, and manage recovery programs to prevent burnout.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Design and guide daily workout routines adapted to business schedules and travel environments",
                "Monitor sleep quality, stress levels, and heart rate metrics to design recovery protocols",
                "Implement physical recovery treatments and stretching routines to maintain posture and vitality"
            ],
            requirements: [
                "Professional certification in sports science, physical training, or physiotherapy",
                "Experience training high-level executives or professional athletes",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will ensure the CEO maintains peak physical and mental condition in a fast-paced environment."
        },
        es: {
            title: "Performance Coach / Entrenador Personal",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Dirigirás el entrenamiento físico, la alineación postural y los protocolos de recuperación del CEO. Diseñarás rutinas, monitorearás métricas de sueño y gestionarás programas de recuperación para evitar el burnout.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Diseñar y guiar rutinas de ejercicio diarias adaptadas a agendas de negocios y viajes",
                "Monitorear la calidad del sueño, niveles de estrés y métricas de ritmo cardíaco para recuperación",
                "Implementar tratamientos de recuperación física y rutinas de estiramiento para mantener vitalidad"
            ],
            requirements: [
                "Certificación profesional en ciencias del deporte, entrenamiento físico o fisioterapia",
                "Experiencia entrenando a ejecutivos de alto nivel o atletas profesionales",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Garantizarás que el CEO mantenga su condición física y mental óptima en un entorno de ritmo rápido."
        }
    },
    {
        id: 'image_stylist',
        department: 'ceo_staff',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'onsite',
        language: 'bilingual',
        en: {
            title: "Image Consultant & Stylist",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will define the CEO's visual code and wardrobe style. You will select clothing outfits for public conferences, video productions, and photo shoots to project the brand's premium status.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Establish a cohesive and premium visual style code for the CEO's wardrobe",
                "Select and curate outfits for public speaking, PR interviews, and media shoots",
                "Coordinate seasonal styling updates and wardrobe logistics for major travels"
            ],
            requirements: [
                "Experience as an image consultant, personal stylist, or wardrobe director in media or corporate environments",
                "Strong understanding of visual styling, color theory, and executive branding",
                "Bilingual capability in English and Spanish"
            ],
            why: "You will shape the visual presence and brand authority of our leader in public spheres."
        },
        es: {
            title: "Estilista de Imagen / Image Consultant (On-demand)",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Definirás el código visual y el estilo de guardarropa del CEO. Seleccionarás atuendos para conferencias públicas, producciones de video y sesiones de fotos para proyectar el estatus premium.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Establecer un código de estilo visual cohesivo y premium para el guardarropa del CEO",
                "Seleccionar y curar atuendos para conferencias públicas, entrevistas de relaciones públicas y sesiones de fotos",
                "Coordinar actualizaciones de estilo estacionales y la logística de guardarropa para viajes importantes"
            ],
            requirements: [
                "Experiencia como consultor de imagen, estilista personal o director de vestuario en medios o entornos corporativos",
                "Comprensión sólida del estilo visual, teoría del color y branding ejecutivo",
                "Capacidad bilingüe en inglés y español"
            ],
            why: "Darás forma a la presencia visual y la autoridad de marca de nuestro líder en el ámbito público."
        }
    },
    {
        id: 'executive_driver',
        department: 'ceo_staff',
        employeeTime: 'full_part_time',
        location: 'us_latam',
        locationType: 'onsite',
        language: 'bilingual',
        en: {
            title: "Executive Driver & Security Escort",
            compensation: "$3 USD/hr (USDC) + remaining target salary in $LXR (Vesting)",
            about: ABOUT_LUXOR_EN,
            role: "You will manage the daily local transit, security protocols, and operational safety for the CEO. You will ensure smooth, secure, and private transportation during daily schedules and high-profile events.\n\nCompensation Model: Luxor operates on a hybrid milestone-based compensation system designed for long-term alignment and stability. You will receive a base rate of $3 USD/hour paid in USDC (stablecoin) for your time. The remainder of your target professional salary will be paid in $LXR tokens calculated dynamically at the time of payout based on market value, subject to vesting rules.\nExample: If your target professional salary is $5,000 USD/month, you receive your base hours ($480 USD for full-time at $3/hr) in USDC, and the remaining $4,520 USD value is paid in $LXR tokens. If $LXR is priced at $0.01 USD, you receive 452,000 $LXR tokens. If $LXR rises to $0.10 USD, you receive 45,200 $LXR tokens. This protects the treasury, provides stability for you, and offers exponential upside as you help the project grow.",
            own: [
                "Provide secure and private transportation for the CEO's daily routes and events",
                "Implement safety protocols and route planning to maximize time efficiency and security",
                "Maintain executive vehicles in perfect operational and visual condition"
            ],
            requirements: [
                "Proven experience as an executive driver, personal chauffeur, or security escort",
                "Active certification in defensive driving and personal security protocols",
                "Bilingual fluency in English and Spanish"
            ],
            why: "You will secure the logistical movement of our founder, allowing productive work in transit."
        },
        es: {
            title: "Conductor Ejecutivo / Escolta de Seguridad",
            compensation: "$3 USD/hr (USDC) + salario restante en $LXR (Vesting)",
            about: ABOUT_LUXOR_ES,
            role: "Gestionarás el tránsito diario local, los protocolos de seguridad y la protección operativa del CEO. Garantizarás un transporte fluido, seguro y privado durante la agenda diaria.\n\nModelo de Compensación: Luxor opera con un sistema de compensación híbrido basado en hitos, diseñado para alinear el crecimiento a largo plazo y dar estabilidad. Recibirás un pago base de $3 USD/hora en USDC (stablecoin) por tu tiempo. El saldo restante de tu salario objetivo profesional se pagará en tokens $LXR calculados dinámicamente al momento del pago según su valor de mercado, sujetos a reglas de vesting (adquisición gradual).\nEjemplo: Si tu salario objetivo profesional es de $5,000 USD al mes, recibes tus horas base ($480 USD por tiempo completo a $3/hr) en USDC, y el valor restante de $4,520 USD se paga en $LXR. Si el token $LXR vale $0.01 USD, se te entregarán 452,000 $LXR. Si el $LXR sube a $0.10 USD, se te entregarán 45,200 $LXR. Esto protege la tesorería del proyecto, te brinda estabilidad y ofrece un potencial de crecimiento exponencial a medida que ayudas al proyecto a crecer.",
            own: [
                "Proporcionar transporte seguro y privado para las rutas diarias y eventos del CEO",
                "Implementar protocolos de seguridad y planificación de rutas para maximizar eficiencia y protección",
                "Mantener los vehículos ejecutivos en perfectas condiciones operativas y visuales"
            ],
            requirements: [
                "Experiencia comprobada como conductor ejecutivo, chofer personal o escolta de seguridad",
                "Certificación activa en conducción defensiva y protocolos de seguridad personal",
                "Fluidez bilingüe en inglés y español"
            ],
            why: "Asegurarás el movimiento logístico de nuestro fundador, permitiendo que trabaje de forma productiva en tránsito."
        }
    }
];
