import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const posts = {
		'hello-world': {
			title: 'El internet y el capital',
			subtitle: '¿Cómo llegamos aquí?',
			content: `
			<div class="max-w-4xl mx-auto bg-primary-950 p-8 rounded-lg shadow-lg">
			<h2 class="text-xl font-bold mb-4 text-primary-900">El internet y la distribución del valor</h2>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">El internet es una innovación capitalista.</p>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">Esta innovación prometía descentralización y acceso, pero entregó exactamente lo opuesto.</p>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">En lugar de democratizar el conocimiento, creó muros de pago y algoritmos que priorizan rentabilidad sobre verdad.</p>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">En lugar de descentralizar el poder, consolidó monopolios sin precedentes: Amazon, Google y Microsoft controlan sus mercados y la infraestructura digital global. Después hablaremos de la nube.</p>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">En lugar de liberar el trabajo, lo precarizó sistemáticamente. La "economía gig" transfiere riesgos y costos empresariales a trabajadores sin seguridad social: Uber extrae valor mientras los conductores pagan el coche, la gasolina, el mantenimiento y el seguro.</p>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">En lugar de crear comunidad, las redes sociales se volvieron máquinas de polarización que monetizan la división social.</p>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">El patrón es claro: cada promesa emancipadora del internet se invirtió en su opuesto porque opera bajo la lógica capitalista de maximizar beneficios privados. Las herramientas digitales tienen potencial transformador real, pero su subordinación al capital las convierte en instrumentos de dominación.</p>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">¿La solución? Cambiar la lógica del sistema. La capacidad productiva de la humanidad nunca ha sido tan alta; el problema no es de poder, sino de voluntad. Si dejamos de perseguir solo el beneficio privado y empezamos a trabajar por el bien común, podemos enfrentar la raíz de esta crisis.</p>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">Pero esto nos lleva a una pregunta inevitable: ¿qué es el beneficio social? ¿Y cómo lo medimos? No basta con decir “lo que la mayoría quiere”. Hay cosas que deseamos porque son valiosas, y otras que valoramos porque muchos las desean. Entender esta diferencia es clave.</p>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">El valor no está en las cosas por sí solas, ni solo en nuestros gustos. Surge de las relaciones que construimos juntos. Y aunque esas relaciones cambian, el valor que generan puede sostener proyectos, guiar decisiones y marcar rumbos colectivos.</p>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">Hoy, el valor se mide casi exclusivamente en dinero. Pero hay otras formas de valor que importan: el cuidado, la confianza, el tiempo compartido, la justicia. Recuperarlas es parte del desafío.</p>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">Necesitamos nuevas formas de producir, redistribuir y decidir. Cambios así no nacen en abstracto: se construyen con ejemplos concretos.</p>
			<p class="text-sm leading-relaxed text-primary-300 mb-6">El desarrollo de software es un buen lugar para empezar. Se basa en colaboración, conocimiento y herramientas digitales que ya permiten experimentar con nuevos modelos de organización.</p>
			<p class="text-sm leading-relaxed text-primary-300">Por eso estamos construyendo <span class="font-bold text-red-500 font-primary">Scythe</span>: un experimento práctico para distribuir el valor de forma más justa. Si lo logramos aquí, otros sectores podrán seguir.</p>
			</div>

			`,
			author: 'Blog Team',
			publishedAt: '2025-05-01T10:00:00Z',
			readTime: 3,
			category: 'Announcements',
			tags: ['welcome', 'introduction', 'blog'],
			featuredImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
			relatedPosts: [
				{
					title: 'Svelte Rocks!',
					publishedAt: '2025-05-05T14:30:00Z',
					slug: '/blog/svelte-rocks'
				}
			],
			nextPost: {
				title: 'Svelte Rocks!',
				slug: '/blog/svelte-rocks'
			}
		},

		'svelte-rocks': {
			title: 'Svelte Rocks!',
			subtitle: 'Discover why Svelte is revolutionizing frontend development',
			content: `
				<h2 id="introduction">Why Svelte is Amazing</h2>
				<p>Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.</p>
				
				<blockquote>
					<p>"Svelte is a compile-time framework that generates vanilla JavaScript, resulting in smaller bundles and better performance." - Rich Harris</p>
				</blockquote>
				
				<h2 id="key-benefits">Key Benefits of Svelte</h2>
				<p>Here are some of the main reasons why developers are falling in love with Svelte:</p>
				
				<h3>No Virtual DOM</h3>
				<p>Instead of using a virtual DOM, Svelte compiles your components into highly efficient imperative code that surgically updates the DOM when the state of your app changes.</p>
				
				<h3>Less Boilerplate</h3>
				<p>Svelte components are written in a simple, declarative syntax that's easy to read and write. No more complex state management or lifecycle methods.</p>
				
				<pre><code>&lt;script&gt;
	let count = 0;
	
	function increment() {
		count += 1;
	}
&lt;/script&gt;

&lt;button on:click={increment}&gt;
	Clicked {count} {count === 1 ? 'time' : 'times'}
&lt;/button&gt;</code></pre>
				
				<h3>Built-in State Management</h3>
				<p>Svelte includes reactive stores out of the box, making state management simple and intuitive without requiring additional libraries.</p>
				
				<h2 id="performance">Performance Advantages</h2>
				<p>The performance benefits of Svelte are significant:</p>
				<ul>
					<li>Smaller bundle sizes (typically 50-60% smaller than React equivalents)</li>
					<li>Faster runtime performance due to compiled output</li>
					<li>Better memory usage with no framework overhead</li>
					<li>Faster development builds</li>
				</ul>
				
				<h2 id="conclusion">Getting Started</h2>
				<p>If you're interested in trying Svelte, the best way to start is with SvelteKit, which provides a full-stack framework built on top of Svelte. It includes routing, server-side rendering, and many other features you need for modern web development.</p>
				
				<p>Ready to dive in? Check out the official Svelte tutorial and start building your first Svelte application today!</p>
			`,
			author: 'Jane Developer',
			publishedAt: '2025-05-05T14:30:00Z',
			readTime: 6,
			category: 'Frontend',
			tags: ['svelte', 'javascript', 'frontend', 'performance', 'framework'],
			featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
			relatedPosts: [
				{
					title: 'SvelteKit: The Full-Stack Framework',
					publishedAt: '2025-05-10T09:15:00Z',
					slug: '/blog/sveltekit-framework'
				},
				{
					title: 'Building Your First Svelte App',
					publishedAt: '2025-05-12T16:20:00Z',
					slug: '/blog/first-svelte-app'
				}
			],
			previousPost: {
				title: 'Hello world!',
				slug: '/blog/hello-world'
			},
			nextPost: {
				title: 'SvelteKit: The Full-Stack Framework',
				slug: '/blog/sveltekit-framework'
			}
		},

		'sveltekit-framework': {
			title: 'SvelteKit: The Full-Stack Framework',
			subtitle: 'Everything you need to build modern web applications with SvelteKit',
			content: `
				<h2 id="introduction">What is SvelteKit?</h2>
				<p>SvelteKit is the official application framework from the Svelte team. It provides everything you need to build a modern web application: routing, server-side rendering, code splitting, and more.</p>
				
				<h2 id="features">Key Features</h2>
				<p>SvelteKit comes packed with features that make web development a joy:</p>
				
				<h3>File-based Routing</h3>
				<p>Routes are defined by the structure of your <code>src/routes</code> directory. No need for separate routing configuration files.</p>
				
				<h3>Server-Side Rendering</h3>
				<p>Get the benefits of SSR out of the box, with the option to pre-render static pages or use server-side rendering for dynamic content.</p>
				
				<h3>API Routes</h3>
				<p>Build your backend API alongside your frontend code using SvelteKit's API routes feature.</p>
				
				<pre><code>// src/routes/api/posts/+server.js
export async function GET() {
	const posts = await getPosts();
	return new Response(JSON.stringify(posts));
}</code></pre>
				
				<h2 id="deployment">Easy Deployment</h2>
				<p>SvelteKit can be deployed to various platforms with minimal configuration. Whether you prefer Vercel, Netlify, or traditional hosting, SvelteKit has adapters to make deployment seamless.</p>
				
				<h2 id="conclusion">Why Choose SvelteKit?</h2>
				<p>SvelteKit combines the simplicity of Svelte with the power of a full-stack framework, making it an excellent choice for modern web development projects of any size.</p>
			`,
			author: 'Mike Framework',
			publishedAt: '2025-05-10T09:15:00Z',
			readTime: 5,
			category: 'Framework',
			tags: ['sveltekit', 'fullstack', 'ssr', 'routing', 'deployment'],
			featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
			relatedPosts: [
				{
					title: 'Svelte Rocks!',
					publishedAt: '2025-05-05T14:30:00Z',
					slug: '/blog/svelte-rocks'
				},
				{
					title: 'Building Your First Svelte App',
					publishedAt: '2025-05-12T16:20:00Z',
					slug: '/blog/first-svelte-app'
				}
			],
			previousPost: {
				title: 'Svelte Rocks!',
				slug: '/blog/svelte-rocks'
			},
			nextPost: {
				title: 'Building Your First Svelte App',
				slug: '/blog/first-svelte-app'
			}
		},

		'first-svelte-app': {
			title: 'Building Your First Svelte App',
			subtitle: 'A step-by-step guide to creating your first Svelte application from scratch',
			content: `
				<h2 id="introduction">Getting Started</h2>
				<p>Ready to build your first Svelte application? This tutorial will walk you through creating a simple but functional todo app that demonstrates Svelte's core concepts.</p>
				
				<h2 id="setup">Project Setup</h2>
				<p>First, let's create a new Svelte project using the official template:</p>
				
				<pre><code>npm create svelte@latest my-first-app
cd my-first-app
npm install
npm run dev</code></pre>
				
				<h2 id="components">Creating Components</h2>
				<p>Svelte components are self-contained blocks of code that encapsulate HTML, CSS, and JavaScript. Let's create a simple Todo component:</p>
				
				<pre><code>&lt;script&gt;
	let todos = [
		{ id: 1, text: 'Learn Svelte', done: false },
		{ id: 2, text: 'Build an app', done: false }
	];
	
	let newTodo = '';
	
	function addTodo() {
		if (newTodo.trim()) {
			todos = [...todos, {
				id: Date.now(),
				text: newTodo.trim(),
				done: false
			}];
			newTodo = '';
		}
	}
	
	function toggleTodo(id) {
		todos = todos.map(todo =&gt;
			todo.id === id ? { ...todo, done: !todo.done } : todo
		);
	}
&lt;/script&gt;

&lt;div class="todo-app"&gt;
	&lt;h1&gt;My Todo App&lt;/h1&gt;
	
	&lt;form on:submit|preventDefault={addTodo}&gt;
		&lt;input
			bind:value={newTodo}
			placeholder="Add a new todo..."
		&gt;
		&lt;button type="submit"&gt;Add&lt;/button&gt;
	&lt;/form&gt;
	
	&lt;ul&gt;
		{#each todos as todo}
			&lt;li class:done={todo.done}&gt;
				&lt;input
					type="checkbox"
					checked={todo.done}
					on:change={() =&gt; toggleTodo(todo.id)}
				&gt;
				{todo.text}
			&lt;/li&gt;
		{/each}
	&lt;/ul&gt;
&lt;/div&gt;

&lt;style&gt;
	.todo-app {
		max-width: 400px;
		margin: 0 auto;
		padding: 2rem;
	}
	
	.done {
		text-decoration: line-through;
		opacity: 0.6;
	}
&lt;/style&gt;</code></pre>
				
				<h2 id="reactivity">Understanding Reactivity</h2>
				<p>One of Svelte's most powerful features is its reactivity system. When you assign to a variable, Svelte automatically updates the DOM. This makes state management incredibly simple.</p>
				
				<h2 id="conclusion">Next Steps</h2>
				<p>Congratulations! You've built your first Svelte application. From here, you can explore more advanced features like stores, animations, and server-side rendering with SvelteKit.</p>
			`,
			author: 'Sarah Coder',
			publishedAt: '2025-05-12T16:20:00Z',
			readTime: 8,
			category: 'Tutorial',
			tags: ['svelte', 'tutorial', 'beginner', 'todo-app', 'components'],
			featuredImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
			relatedPosts: [
				{
					title: 'Svelte Rocks!',
					publishedAt: '2025-05-05T14:30:00Z',
					slug: '/blog/svelte-rocks'
				},
				{
					title: 'SvelteKit: The Full-Stack Framework',
					publishedAt: '2025-05-10T09:15:00Z',
					slug: '/blog/sveltekit-framework'
				}
			],
			previousPost: {
				title: 'SvelteKit: The Full-Stack Framework',
				slug: '/blog/sveltekit-framework'
			}
		}
	};

	const post = posts[params.slug];

	if (!post) {
		throw error(404, 'Post not found');
	}

	return post;
}