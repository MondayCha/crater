/**
 * Copyright 2025 Crater
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { i18n } from "@/lib/i18n";
import { BookKeyIcon, BookUserIcon, ExternalLinkIcon } from "lucide-react";

import { SVGProps, Ref, forwardRef } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 180 180"
    ref={ref}
    {...props}
  >
    <path
      d="M163.9 90v28.2c0 8.9-4.8 17.2-12.5 21.7L126.9 154l-24.3 14c-7.8 4.5-17.4 4.5-25.1-.1l-49-28.7c-7.7-4.5-12.4-12.7-12.4-21.6V61.8c0-8.9 4.8-17.2 12.5-21.7l48.9-28.2c7.7-4.5 17.3-4.5 25 0L126.9 26v42.6l36.9-21.3.1 42.7z"
      fill="currentColor"
    />
    <path
      d="M126.9 26v76.6c0 5.4-2.9 10.3-7.5 13l-21.9 12.7c-4.6 2.7-10.4 2.7-15 0l-24.4-14.1c-3.1-1.8-5-5.1-5-8.7V77.3c0-5.4 2.9-10.3 7.5-13l29.4-17L126.9 26z"
      fill="#de553e"
    />
    <path
      d="M126.9 68.7v36.9c0 3.6-1.9 6.9-5 8.7l-24.5 14.1c-2.3 1.3-4.9 2-7.5 2V90l37-21.3z"
      fill="#faac3e"
    />
  </svg>
);
const CraterIcon = forwardRef(SvgComponent);
CraterIcon.displayName = "CraterIcon";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <CraterIcon className="size-6" />
          Crater
        </>
      ),
      url: `/${locale}`,
    },
    links: [
      {
        text: locale === "cn" ? "用户指南" : "User Guide",
        icon: <BookUserIcon />,
        url: `/${locale}/docs/user`,
        active: "nested-url",
      },
      {
        text: locale === "cn" ? "管理员指南" : "Admin Guide",
        icon: <BookKeyIcon />,
        url: `/${locale}/docs/admin`,
        active: "nested-url",
      },
      {
        text: locale === "cn" ? "开始使用" : "Get Started",
        icon: <ExternalLinkIcon />,
        url: `https://raids-lab.github.io/crater/${locale}/docs/admin/deployment/overview/|||https://gpu.act.buaa.edu.cn/portal`,
      },
    ],
    githubUrl: 'https://github.com/raids-lab/crater',
  };
}
