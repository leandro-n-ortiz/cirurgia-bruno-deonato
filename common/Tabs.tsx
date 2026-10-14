"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from "@mui/material";

type TabsProps = Omit<MuiTabsProps, "onChange" | "value"> & {
  selectedTabValue: string;
  /** The name of the search param used for tabs. Default: "tab" */
  tabSearchParamName?: string;
};

/**
 *  Wrapper for Mui's Tabs.
 *  Client component, as it handles click event.
 */
export function Tabs({
  selectedTabValue,
  tabSearchParamName = "tab",
  ...rest
}: TabsProps) {
  const currentParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <MuiTabs
      value={selectedTabValue}
      onChange={(_, value) => {
        // create new search params based on the current one
        const newParams = new URLSearchParams(currentParams);
        newParams.set(tabSearchParamName, value);

        // navigate using the new search params (replacing the entry in the history stack)
        router.replace(`${pathname}?${newParams.toString()}`);
      }}
      {...rest}
    />
  );
}
