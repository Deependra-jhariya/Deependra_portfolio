const CodeShowcase = () => {
  return (
    <section className="py-16 bg-neutral dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Code Showcase</h2>

        <div className="max-w-3xl mx-auto">
          <div className="code-block rounded-xl overflow-hidden shadow-lg">
            <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
              <span className="text-gray-300 font-mono text-sm">
                CustomHook.js
              </span>
              <div className="flex">
                <div className="w-3 h-3 rounded-full bg-red-400 mx-1"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mx-1"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 mx-1"></div>
              </div>
            </div>
            <pre className="p-4 font-mono text-sm overflow-x-auto">
              <span className="text-blue-400">import</span>{" "}
              <span className="text-cyan-300">{"{ useState, useEffect }"}</span>{" "}
              <span className="text-blue-400">from</span>{" "}
              <span className="text-green-300">'react'</span>;
              <span className="text-purple-400">const</span>{" "}
              <span className="text-yellow-300">useApiData</span>{" "}
              <span className="text-cyan-300">=</span> (
              <span className="text-orange-300">endpoint</span>,{" "}
              <span className="text-orange-300">initialData</span>{" "}
              <span className="text-cyan-300">=</span>{" "}
              <span className="text-cyan-300">[]</span>){" "}
              <span className="text-cyan-300">{"=>"}</span> {"{"}
              <span className="text-purple-400">const</span> [
              <span className="text-orange-300">data</span>,{" "}
              <span className="text-orange-300">setData</span>]{" "}
              <span className="text-cyan-300">=</span>{" "}
              <span className="text-yellow-300">useState</span>(initialData);
              <span className="text-purple-400">const</span> [
              <span className="text-orange-300">loading</span>,{" "}
              <span className="text-orange-300">setLoading</span>]{" "}
              <span className="text-cyan-300">=</span>{" "}
              <span className="text-yellow-300">useState</span>(
              <span className="text-cyan-300">true</span>);
              <span className="text-purple-400">const</span> [
              <span className="text-orange-300">error</span>,{" "}
              <span className="text-orange-300">setError</span>]{" "}
              <span className="text-cyan-300">=</span>{" "}
              <span className="text-yellow-300">useState</span>(
              <span className="text-cyan-300">null</span>);
              <span className="text-yellow-300">useEffect</span>((){" "}
              <span className="text-cyan-300">{"=>"}</span> {"{"}
              <span className="text-purple-400">let</span>{" "}
              <span className="text-orange-300">isMounted</span>{" "}
              <span className="text-cyan-300">=</span>{" "}
              <span className="text-cyan-300">true</span>;
              <span className="text-purple-400">const</span>{" "}
              <span className="text-yellow-300">fetchData</span>{" "}
              <span className="text-cyan-300">=</span>{" "}
              <span className="text-purple-400">async</span> (){" "}
              <span className="text-cyan-300">{"=>"}</span> {"{"}
              <span className="text-yellow-300">setLoading</span>(
              <span className="text-cyan-300">true</span>);
              <span className="text-yellow-300">setError</span>(
              <span className="text-cyan-300">null</span>);
              <span className="text-purple-400">try</span> {"{"}
              <span className="text-purple-400">const</span>{" "}
              <span className="text-orange-300">response</span>{" "}
              <span className="text-cyan-300">=</span>{" "}
              <span className="text-purple-400">await</span>{" "}
              <span className="text-yellow-300">fetch</span>(endpoint);
              <span className="text-purple-400">if</span> (!response.ok) {"{"}
              <span className="text-purple-400">throw new</span>{" "}
              <span className="text-yellow-300">Error</span>(
              <span className="text-green-300">
                `API error: ${"{"}response.status{"}"}`
              </span>
              );
              {"}"}
              <span className="text-purple-400">const</span>{" "}
              <span className="text-orange-300">result</span>{" "}
              <span className="text-cyan-300">=</span>{" "}
              <span className="text-purple-400">await</span> response.
              <span className="text-yellow-300">json</span>();
              <span className="text-purple-400">if</span> (isMounted) {"{"}
              <span className="text-yellow-300">setData</span>(result);
              <span className="text-yellow-300">setLoading</span>(
              <span className="text-cyan-300">false</span>);
              {"}"}
              {"}"} <span className="text-purple-400">catch</span> (err) {"{"}
              <span className="text-purple-400">if</span> (isMounted) {"{"}
              <span className="text-yellow-300">setError</span>(err.message);
              <span className="text-yellow-300">setLoading</span>(
              <span className="text-cyan-300">false</span>);
              {"}"}
              {"}"}
              {"}"};<span className="text-yellow-300">fetchData</span>();
              <span className="text-purple-400">return</span> (){" "}
              <span className="text-cyan-300">{"=>"}</span> {"{"}
              isMounted <span className="text-cyan-300">=</span>{" "}
              <span className="text-cyan-300">false</span>;{"}"};{"}"},
              [endpoint]);
              <span className="text-purple-400">return</span> {"{"} data,
              loading, error {"}"};{"}"};
              <span className="text-blue-400">export default</span> useApiData;
            </pre>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">About This Code</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This custom React hook demonstrates my approach to handling API
              data fetching in React Native applications. It implements key
              patterns including:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Proper loading and error state management</li>
              <li>Memory leak prevention with clean-up function</li>
              <li>Reusable pattern for consistent data fetching</li>
              <li>Type safety with default parameters</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;
