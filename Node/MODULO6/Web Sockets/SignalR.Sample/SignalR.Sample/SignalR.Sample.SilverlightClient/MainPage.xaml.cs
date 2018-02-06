using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;

namespace SignalR.Sample.SilverlightClient
{
    public partial class MainPage : UserControl
    {
        public MainPage()
        {
            InitializeComponent();

            Client.Page = this;
            Client.Context = SynchronizationContext.Current;
            Client client = new Client();
            client.RunAsync();
        }
    }
}
