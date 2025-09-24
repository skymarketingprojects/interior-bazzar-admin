import { useEffect, useState } from "react";
import { PageService } from "../../api/modules/page";
import { logger } from "../../utils/logger";
const dummyContent = `
  <h1>Building Clean React Pages with Module CSS and a Consistent Folder Structure</h1>

<p>laksdfjla;ksdf</p>

<p>
Creating predictable, reusable pages in a React project gets a lot easier when you standardize the way you name folders, files, and styles. A simple convention—each feature gets its own folder with <code>index.tsx</code>, <code>FeatureName.module.css</code>, and <code>useFeatureName.ts</code>—reduces friction for new contributors, speeds up code reviews, and keeps your UI scalable as your app grows. Below is a concise guide you can copy-paste into your documentation to align your team on best practices and avoid style or structure drift across the codebase.
</p>

<h2>Why a Consistent Structure Matters</h2>
<ul>
  <li><strong>Discoverability:</strong> Engineers always know where components, styles, and hooks live.</li>
  <li><strong>Encapsulation:</strong> CSS modules keep styles scoped to the feature, preventing bleed.</li>
  <li><strong>Refactor Safety:</strong> Feature folders are easy to move, rename, or extract.</li>
  <li><strong>Testing Friendly:</strong> Co-locating hooks and components encourages targeted tests.</li>
</ul>

<h2>Recommended Folder Blueprint</h2>
<ol>
  <li><code>FeatureName/</code> – the feature’s root directory.</li>
  <li><code>index.tsx</code> – the primary component that is exported by default.</li>
  <li><code>FeatureName.module.css</code> – styles scoped via CSS Modules.</li>
  <li><code>useFeatureName.ts</code> – a dedicated hook for the feature’s local state, effects, and derived data.</li>
</ol>

<h2>Index Component Essentials</h2>
<p>
Your <code>index.tsx</code> should be small, declarative, and composed of smaller UI primitives. Keep business logic inside the hook and keep the component focused on layout and rendering. Doing so prevents the all-too-common “God component” and makes future changes—like adding analytics, form validation, or state machines—less invasive.
</p>

<h2>CSS Module Tips</h2>
<ul>
  <li>Use semantic class names (e.g., <code>container</code>, <code>title</code>, <code>cta</code>).</li>
  <li>Rely on design tokens (spacing, radii, and font sizes) to ensure cross-page visual harmony.</li>
  <li>Prefer composition over deep selector chains; keep specificity low to avoid overrides.</li>
</ul>

<h2>Hooks That Age Well</h2>
<p>
In <code>useFeatureName.ts</code>, isolate side effects (fetching, subscriptions), memoize expensive computations, and expose a minimal API to the UI. Return only what the component truly needs: state, event handlers, and derived values. That separation makes both the hook and the component easier to test and easier to migrate if your data source changes.
</p>

<h2>Quality Checklist</h2>
<ul>
  <li>Does the folder contain exactly one exported component?</li>
  <li>Are styles limited to a single CSS module file?</li>
  <li>Is logic abstracted into a hook with clear inputs/outputs?</li>
  <li>Are tokens used for spacing, colors, and typography?</li>
  <li>Is the public API of the component documented (props, events)?</li>
</ul>

<h2>Final Thoughts</h2>
<p>
Small, consistent decisions compound. By adopting this folder pattern and leaning on CSS Modules, you’ll reduce merge conflicts, tame global CSS, and keep your UI codebase approachable—even as features like <em>Legal</em>, <em>Qna</em>, <em>LeadPolicy</em>, <em>PaymentPage</em>, and <em>ContactUs</em> multiply. Future you (and your teammates) will thank you.
</p>`;
const usePrivacyPolicy = () => {
  const [loading, setLoading] = useState(true);
  const [privacy, sePrivacy] = useState(dummyContent);
  const fetchDisclaimer = async () => {
    try {
      setLoading(true);
      const res = await PageService.getPrivacyPolicy();
      if (!res.response) {
        return;
      }
      sePrivacy(res.data.page_content);
    } catch (e) {
      logger.error("Error fetching privacy", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDisclaimer();
  }, []);

  return { loading, privacy };
};

export default usePrivacyPolicy;
