using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.WebHost; // fucked up

namespace RoundTheClock.Core.App_Code
{
	public class Global : System.Web.HttpApplication
	{		 
		protected void Application_Start (Object sender, EventArgs e)
		{

			GlobalConfiguration.Configuration.Routes.MapHttpRoute("Default", 
				"{controller}/{id}", 
				new { id = RouteParameter.Optional });
		}
 
		protected void Session_Start (Object sender, EventArgs e)
		{

		}

		protected void Application_BeginRequest (Object sender, EventArgs e)
		{

		}

		protected void Application_EndRequest (Object sender, EventArgs e)
		{

		}

		protected void Application_AuthenticateRequest (Object sender, EventArgs e)
		{

		}

		protected void Application_Error (Object sender, EventArgs e)
		{

		}

		protected void Session_End (Object sender, EventArgs e)
		{

		}

		protected void Application_End (Object sender, EventArgs e)
		{

		}
	}
}
