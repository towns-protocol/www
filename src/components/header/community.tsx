import { communityItems } from '@/constants/links'
import useCMSState from '@/stores/cms.store'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'
import { Typography } from '../ui/typography'

export default function Community() {
  const { cmsData } = useCMSState()

  //! map the icon for now since we only allow text changes in the CMS
  const communityLinks = cmsData?.headerFooterLink.communityItems.map((item, index) => ({
    heading: item.text,
    icon: communityItems[index].icon,
    url: item.url as string,
  }))

  return (
    <NavigationMenu skipDelayDuration={1}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white">Community</NavigationMenuTrigger>
          <NavigationMenuContent className="flex !w-[266px] flex-col gap-y-2 !rounded-xl p-2">
            {communityLinks?.map(({ heading, icon, url }, index) => (
              <NavigationMenuLink
                key={index}
                className="flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-[#f7f7f81a]"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
                <div>
                  <Typography as="h4" size="sm" className="font-medium">
                    {heading}
                  </Typography>
                </div>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
